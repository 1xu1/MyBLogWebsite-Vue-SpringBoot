<template>
<div>
    <Header></Header>
    <div class="oprator">
        <span>博文标题</span>
        <input v-model:value="blog.blog_title" />
        <span class='itemsInLine'>博文标签</span>
        <input type="text" v-model:value="blog.blog_label" />
        <button class="dropdown-item" v-on:click="save">
            保存
        </button>
        <button class="dropdown-item" v-on:click="addBlog">
            新建
        </button>
        <button class="dropdown-item" onclick="window.location.href = '../admin_back'">
            返回
        </button>
    </div>
    <div class="container">
        <mavon-editor class="editor" v-model="blog.blog_content"></mavon-editor>
    </div>

    <Footer></Footer>
</div>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
    name: "BlogEditor",
    components: {
        Footer,
        Header
    },
    data() {
        return {
            blog: {
                blog_id: null,
                blog_title: null,
                blog_content: null,
                blog_like: null,
                blog_label: null,
                blog_time: null,
                blog_read: null,
                blog_writer: null,
                blog_visibility: null,
                blog_create_time: null,

            },
        };
    },
    methods: {
        save: function () {
            console.log("保存辣！！！");
            console.log(this.blog);
            axios
                .post("/api/admin/editBlog", {
                    blog_id: this.blog.blog_id,
                    blog_content: this.blog.blog_content,
                    blog_title: this.blog.blog_title,
                    blog_label: this.blog.blog_label,
                }, {
                    headers: {
                        'Token': sessionStorage.login_stat
                    }
                })
                .then((res) => {
                    console.log(res);
                    alert("保存成功");
                })
                .catch((err) => {
                    console.log(err);
                    alert("保存失败");
                });
        },
        deleteBlog: function () {
            axios
                .post("/api/admin/editBlogVis", {
                    blog_id: curBlog.blog_id,
                    blog_visibility: vis,
                }, {
                    headers: {
                        'Token': sessionStorage.login_stat
                    }
                })
                .then((res) => {
                    console.log(res);
                    alert("删除成功");
                })
                .catch((err) => {
                    console.log(err);
                    alert("删除失败");
                });
        },
        addBlog: function () {
            axios
                .post("/api/admin/addBlog", {
                    blog_content: this.blog.blog_content,
                    blog_title: this.blog.blog_title,
                    blog_label: this.blog.blog_label,
                    blog_writer: "徐宇翔",
                }, {
                    headers: {
                        'Token': sessionStorage.login_stat
                    }
                })
                .then((res) => {
                    console.log(res);
                    if (res.data == 0) {
                        alert("新增失败");
                    } else {
                        alert("新增成功");
                        location.replace("./blogEditor?blog_id=" + res.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert("新增失败");
                });
        },
        //读取博文数据
        getData: function () {
            axios
                .get("/api/getBlogById", {
                    params: {
                        blog_id: GetRequest().blog_id,
                    }
                })
                .then((res) => {
                    this.blog = res.data.data;
                    console.log(this.blog);
                });
        },
    },
    mounted: function () {
        if (!sessionStorage.login_stat) {
            alert("登录状态异常，跳转回首页！");
            location.replace("./home");
        } else {
            setIpAdress();
            this.getData();
        }
    },
};

function setIpAdress() {
    if (
        window.location.origin === "file://" ||
        window.location.origin === "http://localhost:8080"
    ) {
        axios.defaults.baseURL = "http://localhost:8083";
        //axios.defaults.baseURL = "http://42.192.211.76:8083";
    } else {
        axios.defaults.baseURL = window.location.origin + ":8083";
    }
    console.log(axios.defaults.baseURL);
}
//处理从url提取参数的问题
function GetRequest() {
    var url = location.search;
    url = decodeURI(url);
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        let strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0].replace(/\s/g, "")] = unescape(
                strs[i].split("=")[1].replace(/\s/g, "")
            );
        }
    }
    return theRequest;
}
</script>

<style scoped>
/*@import "bootstrap";*/

.editor {
    height: 700px;
}

.oprator {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
}

.itemsInLine {
    margin-left: 10px;
}
</style>
