<template>
<div class="latest-comment-card">
    <div v-if="loading">
        <div class="loading">
            <LoadingIcon></LoadingIcon>
        </div>
    </div>
    <div v-else style="width:250px">
        <p>最新评论：</p>
        <hr>
        <a style="margin-top:5px" class="comment" :href="'./blog?blog_id='+item.blog_id+'#'+item.floor" v-for="item in comments">{{item.comment_user_name}}:{{commentContent(item.comment_content)}}</a>
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
                    console.log(err);
                });
        }
    },
    mounted: function () {
        this.getDate()
    },
    computed:{
        commentContent(){
            return function(text){
                if(text.length>20){
                    return text.slice(0,20)+"..."
                }
                return text
            }
        }
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

.loading{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 200px;
}

.latest-comment-card {
    margin-top: 20px;
    margin-left: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 5px 5px 5px 5px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.comment{
    display: block;
    overflow: hidden;
}
</style>
