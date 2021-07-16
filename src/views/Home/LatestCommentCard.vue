<template>
<div class="latest-comment-card">
    <div v-if="loading">
        <div class="loading">
            <LoadingIcon></LoadingIcon>
        </div>
    </div>
    <div v-else style="width:250px">
        <p>最新评论：</p>
        <div v-for="item in comments" class="block">
            <div class="user">{{item.comment_user_name}} ：</div>
            <a style="margin-top:5px" class="comment" :href="'./blog?blog_id='+item.blog_id+'#'+item.floor">{{commentContent(item.comment_content)}}</a>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
import CrossLine from '@/components/things/CrossLine.vue';
export default {
  components: { CrossLine },
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
    color: #757575;
    text-decoration: none;
    background-color: transparent;
}

.block{
    margin:10px 0 0 10px;
    min-height: 40px;
}

.block:hover{
    transition: all .4s;
    background-color: #e0e0e0;
}

.user{
    line-height: 20px;
    font-weight: 500;
    color: #212121;
}

.content{

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
