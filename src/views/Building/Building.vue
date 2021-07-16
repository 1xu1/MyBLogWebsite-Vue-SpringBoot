<template>
    <div>
        <Header></Header>
        <div class="building_center">
            <img src="@/assets/img/what.png"></img>
            <center><h1>该模块施工中</h1></center>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
//引入组件
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  name: "Building",
  data() {
    return {};
  },
  components: {
    Footer, //注册组件
    Header,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.building_center {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-wrap:wrap
}
</style>
