<template>
<div>
    <div v-if="loading">
        <div class="loading">
            <LoadingIcon></LoadingIcon>
        </div>
    </div>
    <!--博文信息相关-->
    <div v-else class="head_info">
        <h1 class="blog_title">
            {{ blog.blog_title }}
        </h1>
        <div class="info_row">
            <span v-time="blog.blog_time" class="blog_info bi bi-stopwatch-fill">
            </span>
            <span class="blog_info bi bi-person-fill">作者：{{ blog.blog_writer }}</span>
            <span class="blog_info bi bi-heart-fill">喜欢：{{ blog.blog_like }}</span>
            <span class="blog_info bi bi-book-fill">阅读量：{{ blog.blog_read }}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Template",
    props: {
        blog_id: {
            type: String,
        },
        loading: {
            type: Boolean,
            default: true,
        },
        blog: {
            type: Object,
            default: null,
        },
    },
};
</script>

<style scoped>
/*@import "bootstrap";*/

.head_info {
    background-color: black;
    background-image: url(../assets/img/head_3.jpg);
    background-size: contain;
    line-height: 100%;
    width: 100%;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
}

.blog_title {
    width: 100%;
    color: aliceblue;
    text-shadow: 0 3px 6px rgb(0 0 0 / 30%);
    font-weight: 700;
    display: flex;
    justify-content: center;
    position: relative;
    top: 60px
}
.info_row {
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    top: 60px;
}


.blog_info {
    color: gainsboro;
    padding-left: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
</style>
