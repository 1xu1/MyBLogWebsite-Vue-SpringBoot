<template>
<div>
    <Header></Header>
    <el-container>
        <el-aside style="width: 200px">
            <AdminBackSide></AdminBackSide>
        </el-aside>
        <AdminBackMain></AdminBackMain>
    </el-container>
    <Footer></Footer>
</div>
</template>

<script>
//引入组件
import AdminBackSide from "@/views/AdminBack_Blog/AdminBackSide.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import AdminBackMain from "@/views/AdminBack_Blog/AdminBackMain.vue";
import PagesButton from "@/components/PagesButton";
import {Container,Aside} from "element-ui"

export default {
    components: {
        AdminBackSide,
        Footer,
        Header,
        AdminBackMain,
        PagesButton,
        'el-container':Container,
        'el-aside':Aside
    },
    name: 'AdminBack_blog',
};
</script>

<style scoped>
.themeDark {
    background-color: #545c64;
}
</style>
