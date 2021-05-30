<template>
<!-- /底部小字 -->
<div class="footer-container" style="text-align: center;">
    <div class="footer-line"></div>
    <footer>
        <a>&copy; 2021 徐宇翔</a>
        <i class="bi bi-emoji-sunglasses"></i>
        <a>-版权所有.</a><br>
        <a class="ebsite-Numbers" href="http://beian.miit.gov.cn/" target="_blank">浙ICP备2021004648号-1</a>
    </footer>
</div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.footer-line{
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
}
.footer-container{
    margin-left: 10%;
    width: 80%;
    text-align: center;
}
.Website-Numbers{
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
.Website-Numbers:hover{
    color: #0056b3;
    text-decoration: underline;
}
a:-webkit-any-link{
    cursor: pointer;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
a:-webkit-any-link:hover{
    color: #0056b3;
    text-decoration: underline;
}
</style>
