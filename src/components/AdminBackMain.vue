<template>
<el-container>
    <el-header style="text-align: right; font-size: 12px">
        <el-form :inline="true">
            <el-form-item label="标题">
                <el-input placeholder="标题"></el-input>
            </el-form-item>
            <el-form-item label="时间">
                <div class="block">
                    <el-date-picker type="datetime" placeholder="选择日期时间" align="right">
                    </el-date-picker>
                </div>
            </el-form-item>

            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>
    </el-header>

    <el-main>
        <el-table :data="blog">
            <el-table-column prop="blog_id" label="ID"> </el-table-column>
            <el-table-column prop="blog_title" label="标题"> </el-table-column>
            <el-table-column prop="blog_writer" label="作者"> </el-table-column>
            <el-table-column prop="blog_label" label="标签"> </el-table-column>
            <el-table-column prop="blog_time" label="日期"> </el-table-column>
            <el-table-column prop="blog_like" label="喜欢"> </el-table-column>
            <el-table-column prop="blog_read" label="阅读量"> </el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="jumpToBlog(scope.$index)">查看</el-button>
                    <el-button type="text" size="small" @click="jumpToEditor(scope.$index)">编辑</el-button>
                    <el-button v-if="blog[scope.$index].blog_visibility == 1" type="text" size="small" @click="visBlog(scope.$index,0)">隐藏</el-button>
                    <el-button v-else type="text" size="small" @click="visBlog(scope.$index,1)">显示</el-button>
                </template>
            </el-table-column>
        </el-table>
        <PagesButton :pageNum="page" :pages="pageTotal"></PagesButton>
    </el-main>
</el-container>
</template>

<script>
import axios from "axios";
import {
    Button,
    Table,
    Form,
    TableColumn,
    Container,
    Header,
    FormItem,
    Input,
    DatePicker,
    Main
} from "element-ui"
import PagesButton from "./PagesButton.vue"
export default {
    name: "AdminBackMain",
    components: {
        "el-button": Button,
        "el-table": Table,
        "el-form": Form,
        'el-table-column': TableColumn,
        'el-container': Container,
        'el-header': Header,
        'el-form-item': FormItem,
        'el-input': Input,
        'el-date-picker': DatePicker,
        'el-main': Main,
        PagesButton
    },
    data() {
        return {
            blog: null,
            page: 1,
            pageTotal: 0,
            limit: 20
        };
    },
    methods: {
        //查看
        jumpToBlog: function (id) {
            window.location.href = "../blog?blog_id=" + this.blog[id].blog_id;
        },
        //编辑
        jumpToEditor: function (id) {
            window.location.href = "../admin_back/blogEditor?blog_id=" + this.blog[id].blog_id;
        },
        //读取全部的博文数据
        getData: function () {
            axios.get("/api/getAllBlog", {
                    params: {
                        start: this.page,
                        limit: this.limit
                    },
                })
                .then((res) => {
                    this.blog = res.data.data.list;
                    this.page = res.data.data.pageNum;
                    this.pageTotal = res.data.data.pages;
                    console.log(this.blog)
                })
                .catch((err) => {
                    alert("诶呀，数据读取失败，请试着刷新一下");
                    console.log(err);
                });
        },
        //隐藏/显示博文
        visBlog: function (index, vis) {
            let curBlog = this.blog[index]
            axios
                .post("/api/editBlogVis", {
                    blog_id: curBlog.blog_id,
                    blog_visibility: vis,
                })
                .then((res) => {
                    curBlog.blog_visibility = vis;
                    alert("调整成功");
                })
                .catch((err) => {
                    console.log(err);
                    alert("调整失败");
                });
        },
    },
    mounted: function () {
        if (this.$route.query.page != undefined) {
            this.page = this.$route.query.page;
        }
        if (this.$route.query.limit != undefined) {
            this.limit = this.$route.query.limit;
        }
        if (!sessionStorage.login_stat) {
            alert("登录状态异常，跳转回首页！");
            location.replace("/");
        } else {
            this.getData();
        }
    },
    filters: {
        time_trans: function (value) {
            let r = new Date(value);
            return r.toString();
        },
    },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
