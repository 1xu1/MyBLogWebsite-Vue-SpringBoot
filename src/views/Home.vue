<template>
<div>
    <Header></Header>
    <div class="container">
        <div class="middle">
            <BlogList :page="page" :limit="limit" :blog="blog" :loading="loading"></BlogList>
            <PagesButton :pageNum="page" :pages="pageTotal"></PagesButton>
        </div>
        <div class="left">
            <LatestCommentCard style="width:250px"></LatestCommentCard>
            <LabelCloudCard style="width:250px"></LabelCloudCard>
        </div>
        <div class="right">
            <PersonalCard></PersonalCard>
        </div>
    </div>
    <MusicPlayer songId='503268086'></MusicPlayer>
    <Footer></Footer>
</div>
</template>

<script>
//引入组件
import Footer from "../components/Footer";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import PagesButton from "../components/PagesButton.vue";
import PersonalCard from "../components/PersonalCard"
import MusicPlayer from "../components/MusicPlayer"
import LatestCommentCard from "../components/LatestCommentCard.vue"
import LabelCloudCard from "../components/LabelCloudCard.vue"

import axios from "axios"
export default {
    name: "Home",
    data() {
        return {
            page: 1,
            limit: 10,
            blog: null,
            loading: true,
            pageTotal: 0,
            blog_label:''
        };
    },
    components: {
        Footer, //注册组件
        Header,
        BlogList,
        PagesButton,
        PersonalCard,
        MusicPlayer,
        LatestCommentCard,
        LabelCloudCard
    },
    mounted: function () {
        if (this.$route.query.page != undefined) {
            this.page = this.$route.query.page;
        }
        if (this.$route.query.limit != undefined) {
            this.limit = this.$route.query.limit;
        }
        if (this.$route.query.label != undefined) {
            this.blog_label = this.$route.query.label;
        }
        this.getData();
    },
    methods: {
        //读取全部的博文数据
        getData: function () {
            axios
                .get("/api/getBlogList", {
                    params: {
                        start: this.page,
                        limit: this.limit,
                        label:this.blog_label
                    },
                })
                .then((res) => {
                    this.blog = res.data.data.list;
                    this.pageTotal = res.data.data.pages;
                    this.loading = false;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/*@import "bootstrap";*/
@media screen and (max-width: 1000px) {
    .container {
        background-color:lightblue;
        padding:0 10px;
    }
    .left {
        display: none;
    }
    .right{
        display: none;
    }
}
@media screen and (min-width: 1000px) {
    .container {
       overflow: hidden;
        padding: 0 300px;
    }
}

.container>div {
    float: left;
}

.middle {
    width: 100%;

}

.left {
    width: 300px;
    margin-left: -100%;
    position: relative;
    left: -300px;
}

.right {
    width: 250px;
    margin-left: -250px;
    position: relative;
    right: -250px;
}

.home-card{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}


</style>
