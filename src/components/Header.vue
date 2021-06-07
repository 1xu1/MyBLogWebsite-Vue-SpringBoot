<template>
  <div class="head-contanier">
    <img src="../assets/img/logo.png" class="head-icon" />
    <span class="head-title">盐巴鱼的博客</span>
    <nav class="head-right">
      <a class="head-item" href="/home">个人博文</a>
      <a class="head-item" href="/home?page=1&label=更新日志">更新日志</a>
      <a class="head-item" href="/building">资源分享</a>
      <a class="head-item" href="/building">项目分享</a>
    </nav>
    <el-button @click="login()" type="primary" class="head-button">登录</el-button>
    <Login :loginVisible='loginDialog'></Login>
  </div>
</template>

<script>
import {Button} from 'element-ui';
import Login from "../components/Login";
export default {
  name: "Header",
  components: {
    Login,
    "el-button":Button
  },
  data(){
    return{
      loginDialog:false
    }
  },
  methods:{
    login:function(){
      if (sessionStorage.login_stat) {
        location.replace("/admin_back");
        return
      }
      this.loginDialog=true
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->

<style scoped>
/*@import 'bootstrap';*/
.head-contanier {
  display: flex;
  position: relative;
  flex-direction: row;
  height: 70px;
  align-items: center;
  box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #dee2e6;
  background: white;
}
.head-icon {
  margin: 15px 15px 15px 15px;
  height: 35px;
  border-radius: 17.5px;
}
.head-title {
  font-weight: 400;
  font-size: 1.25rem;
}
.head-right{
  margin-left: auto;
}
.head-item{
  height: 100%;
  color: #121416;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration:none;
}
.head-item:hover{
  text-decoration: underline;
}
.head-button{
  margin-left: 20px;
  margin-right: 20px;
}
</style>
