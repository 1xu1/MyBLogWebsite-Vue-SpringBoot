<template>
<div class="latest-comment-card">
    <div v-if="loading">
        <center>
            <img src="../assets/img/loading.gif" style="margin-top: 100px; margin-bottom: 100px" />
        </center>
    </div>
    <div v-else>
        <p>最新评论：</p>
        <a style="margin-top:5px" class="comment" :href="'./blog?blog_id='+item.blog_id+'#'+item.floor" v-for="item in comments">{{item.comment_user_name}}:{{item.comment_content}}</a>
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: "LatestCommentCard",
    data() {
        return {
            comments: null,
            loading: true
        }
    },
    methods: {
        //读取最近评论
        getDate() {
            axios
                .get("/api/getLatestComment")
                .then((res) => {
                    this.comments=res.data.data
                    this.loading = false;
                })
                .catch((err) => {
                    alert("诶呀，数据读取失败，请试着刷新一下");
                    console.log(err);
                });
        }
    },
    mounted: function () {
        this.getDate()
    }
}
</script>

<style scoped>
a {
    cursor: pointer;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;

}

.latest-comment-card {
    margin-top: 20px;
    margin-left: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 10px 10px 10px 10px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.comment{
    display: block;
}
</style>
