<template>
<div>
    <Header></Header>
    <div class="projects-contanier">
        <div class="projects-content">
            <ProjectCard title="平台游戏" img="https://images.cnblogs.com/cnblogs_com/YuXiang-Xu/1989588/o_2106271617491624810643(1).png" intro="一个简单的平台游戏" url="/others/platform-game/index.html"></ProjectCard>
            <ProjectCard title="中医药宝典" img="https://images.cnblogs.com/cnblogs_com/YuXiang-Xu/1989863/o_2106201543161624203746(1).png" intro="使用vant简单搭建的移动端网页" url="/others/zhongyiyao/"></ProjectCard>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard.vue"
export default {
    name: "Projects",
    components: {
        Footer, //注册组件
        Header,
        ProjectCard
    }
}
</script>

<style scoped>
.projects-contanier {
    display: flex;
    justify-content: center;
}

.projects-content {
    display: flex;
    width: 80%;
    flex-direction: row;
    justify-content: flex-start;
}
</style>
