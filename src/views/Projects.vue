<template>
<div>
    <Header></Header>
    <div class="projects-contanier">
        <div class="projects-content">
            <ProjectCard title="平台游戏" img="https://images.cnblogs.com/cnblogs_com/YuXiang-Xu/1989863/o_2106201250471624193367(1).png" intro="一个简单的平台游戏" url="/others/game/index.html"></ProjectCard>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard.vue"
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
    width: 80%;
}
</style>
