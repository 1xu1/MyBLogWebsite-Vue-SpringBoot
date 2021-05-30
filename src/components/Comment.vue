<template>
<div class="box-shadow comment">
    <!--评论回复功能块-->
    <div class="container">
        <input class="comment_input" placeholder="昵称" maxlength="8" v-model:value="commenter"></input>
        </br>
        <input class="comment_input" style="width: 40%;" placeholder="个人站点(选填)" maxlength="20" v-model:value="commenter_link"></input>
        <div class="row">
            <textarea id="comment_reply" class="comment_reply" placeholder="请在此输入评论" maxlength="250" v-model:value="commenter_content"></textarea>
            <button class="button_reply" v-on:click="addComment">回复</button>
        </div>
    </div>
    <!--评论列表-->
    <div v-for="item in comments_content">
        <!--单条评论渲染-->
        <hr />
        <!--渲染评论头部信息-->
        <div>
            #{{ item.floor }}
            <img src="../assets/img/default_head.png" class="head_icon" alt="..." />
            <span class="commenter_name"> {{ item.comment_user_name }}</span>
            <span class="comment_sub" v-time="item.comment_time"></span>
            <span class="comment_sub">赞{{ item.comment_like }}</span>
            <a class="comment_sub" v-if="item.comment_link !== undefined" v-bind:href="'http:' + item.comment_link">#{{ item.comment_link }}</a>
        </div>
        <!--渲染评论内容-->
        <div class="comment-content">
            {{ item.comment_content }}
        </div>

    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "Comment",
    data() {
        return {
            comments_content: null,
            blog_id: 0,
            commenter: "",
            commenter_link: "",
            commenter_content: "",
            loading: true,
            adding: false,
        };
    },
    methods: {
        //获取评论
        getComments: function () {
            this.blog_id = GetRequest().blog_id;
            axios
                .get("/api/getAllComment", {
                    params: {
                        blog_id: this.blog_id,
                    },
                })
                .then((res) => {
                    this.comments_content = res.data.data;
                    if (sessionStorage.commenter) {
                        this.commenter = sessionStorage.commenter;
                    }
                    if (sessionStorage.comment_link) {
                        this.commenter_link = sessionStorage.commenter_link;
                    }
                    this.loading = false;
                })
                .catch((err) => {
                    console.log("诶呀，评论信息读取失败");
                    console.log(err);
                });
        },
        //增加评论
        addComment: function () {
            if (this.adding) {
                alert("评论正在上传，请等待一下");
                return;
            }
            this.adding = true;
            let cur_comment =
                Math.max.apply(
                    Math,
                    this.comments_content.map((item) => {
                        return item.floor;
                    })
                ) + 1;
            //验证输入是否正确
            if (this.commenter == "" || this.commenter == null) {
                alert("用户名输入有问题");
                return;
            }
            if (this.commenter_link == "" || this.commenter_link == null) {
                this.commenter_link = null;
            }
            if (this.commenter_content == "" || this.commenter_content == null) {
                alert("回复内容有问题");
                return;
            }
            axios
                .post("/api/addComment", {
                    comment_user_name: this.commenter,
                    comment_link: this.commenter_link,
                    comment_content: this.commenter_content,
                    floor: cur_comment,
                    blog_id: this.blog_id,
                })
                .then((res) => {
                    let new_item;
                    new_item = res.data.data;
                    console.log(new_item)
                    this.comments_content.push(new_item);
                    sessionStorage.commenter = this.commenter;
                    sessionStorage.comment_link = this.commenter_link;
                })
                .catch((err) => {
                    console.log("诶呀，评论增加失败");
                    console.log(err);
                });
            this.adding = false
        },
    },
    mounted: function () {
        setIpAdress();
        this.getComments();
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
.comment {
    margin-top: 20px;
    padding: 20px 20px 20px 20px;
}

.comment-content {
    position: relative;
    left: 35px;
    margin-top: 10px;
}

.commenter_name {
    text-decoration: none;
    font-weight: 700;
}

.comment_sub {
    color: #757575;
    font-size: small;
    margin: 5px 5px 5px 5px;
}

.comment_reply {
    width: 90%;
    height: 70px;
    resize: none;
    font-size: small;
    outline-color: #1565c0;
    border: solid 1px #757575;
    border-radius: 3px;
}

.comment_input {
    width: 100px;
    font-size: medium;
    outline-color: #1565c0;
    border: solid 1px #757575;
    border-radius: 3px;
    margin-bottom: 15px;
}

.button_reply {
    margin-left: 5px;
    border-radius: 5px;
    width: 70px;
    height: 70px;
    border: #757575;
    flex: right;
    background-color: #2196f3;
    color: white;
}

.button_reply:hover {
    /* 鼠标移入按钮范围时改变颜色 */
    background: #1976d2;
}

.head_icon {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 5px 5px 5px 5px;
}

.subheading {
    font-size: medium;
}

.box-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
