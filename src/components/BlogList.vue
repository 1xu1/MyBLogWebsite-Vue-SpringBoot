<template>
<!--博文列表-->
<div id="blogList">
    <div v-if="loading">
        <center>
            <img src="../assets/img/loading.gif" style="margin-top: 100px; margin-bottom: 100px" />
        </center>
    </div>
    <div v-else>
        <div v-for="item in blog" class="blog-card" @click='goToBlog(item)'>
            <div class="header">
                <span class="title not-slected">{{ item.blog_title }}</span>
            </div>
            <div class="body">
                <div class="subheading not-slected">
                    <div class="item">
                        <span class="bi bi-calendar-week-fill"></span> <span v-time="item.blog_time" class="tag-content"></span>
                    </div>
                    <div class="item">
                        <span class="bi bi-person-fill"></span><span class="tag-content">作者:{{ item.blog_writer }}</span>
                    </div>
                    <div class="item">
                        <span class="bi bi-heart-fill"></span><span class="tag-content">喜欢:{{ item.blog_like }}</span>
                    </div>
                    <div class="item">
                        <span class="bi bi-book-fill"></span><span class="tag-content">阅读量:{{ item.blog_read }}</span>
                    </div>
                    <div class="item">
                        <span class="bi bi-bookmark-dash-fill"></span><span class="tag-content">标签:{{ labels(item.blog_label) }}</span>
                    </div>
                </div>
                <p class=" not-slected">{{ item.blog_content | ellipsis }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import time from "../assets/js/time";
export default {
    name: "BlogList",
    data() {
        return {};
    },
    props: {
        page: {
            Number,
            default: 1,
        },
        limit: {
            Number,
            default: 10,
        },
        blog: {
            Object,
            default: null,
        },
        loading: {
            Boolean,
            default: null,
        },
    },
    methods: {
        goToBlog(blog) {
            this.$router.push({
                path: 'blog',
                query: {
                    blog_id: blog.blog_id
                }
            })
        }
    },
    computed: {
        labels() {
            return function (label) {
                label = label.toString()
                return label.replace(/#/g, ' ')
            }
        }
    },
    filters: {
        ellipsis(_val) {
            if (!_val) return "";
            //去掉#号
            _val = _val.replace(/#/g, "");
            //超出200字符的去掉
            if (_val.length > 200) {
                return _val.slice(0, 200) + "······";
            }

            return _val;
        },
    },
};
</script>

<style scoped>
/*@import "bootstrap";*/

.title {
    font: 600 1.2em "Fira Sans", sans-serif;
}

.blog-card {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 10px 20px 10px 20px;
    margin-top: 10px;
    background-color: white;
}

.blog-card:hover {
    transition: all .4s;
    background-color: #e0e0e0;
}

.blog-card>.header {
    margin: 10px 10px 10px 10px;
}

.blog-card>.body>.subheading>.item {
    margin: 0px 10px 0px 10px;
}

.subheading {
    display: flex;
    flex-direction: row;
}

.not-slected {
    -moz-user-select: none;
    /*火狐*/
    -webkit-user-select: none;
    /*webkit浏览器*/
    -ms-user-select: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
}

.tag-content {
    margin: auto 5px;
}
</style>
