<template>
<div>
    <Header></Header>
    <div style="margin-top:-22px;">
        <BlogHead :blog_id="blog_id" :blog="blog" :loading="loading"></BlogHead>
    </div>
    <div class="container">
        <div class="box-shadow" style="padding-bottom:10px;background-color:#fff">
            <BlogContent :blog_id="blog_id" :blog="blog" :loading="loading"></BlogContent>
            <div style="position: relative; left: 90%;">
                <LikeButton :blog_id="blog_id" :blog="blog"></LikeButton>
            </div>
        </div>
        <Comment style="background-color:#fff"></Comment>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import BlogContent from "../components/BlogContent";
import Comment from "../components/Comment";
import LikeButton from "../components/LikeButton";
import BlogHead from "../components/BlogHead";

import axios from "axios";
export default {
    components: {
        Footer,
        Header,
        BlogContent,
        Comment,
        LikeButton,
        BlogHead,
    },
    name: "Blog",
    data() {
        return {
            blog_id: "",
            blog: {
                blog_like: 0,
            },
            loading: true,
        };
    },
    methods: {
        //读取博文数据
        getData: function () {
            axios
                .get("/api/getBlogById", {
                    params: {
                        blog_id: this.blog_id,
                    },
                })
                .then((res) => {
                    this.blog = res.data.data;
                    this.loading = false;
                    this.blog_like = this.blog.blog_like;
                })
                .catch((err) => {
                    console.log("诶呀，博文读取失败");
                    console.log(err);
                });
        },
        //博文阅读量加一
        addBlogRead: function () {
            if (sessionStorage.read != this.blog_id) {
                axios
                    .post("/api/addBlogRead", {
                        blog_id: this.blog_id,
                    })
                    .then((res) => {
                        sessionStorage.read = this.blog_id;
                        console.log(res);
                    });
            }
        },
    },
    mounted: function () {
        if (this.$route.query.blog_id != undefined) {
            this.blog_id = this.$route.query.blog_id;
        }
        if (this.$route.query.label != undefined) {
            this.blog_label = this.$route.query.label;
        }
        this.getData();
        this.addBlogRead();
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
</script>

<style scoped>
/*@import "bootstrap";*/
.box-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.container{
  margin-left: 10%;
  width: 80%;
}

</style>
