import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

import 'mavon-editor/dist/css/index.css'

import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

//全局引入组件
import mavonEditor from 'mavon-editor'
import LoadingIcon from '@/components/things/LoadingIcon.vue'
import CrossLine from '@/components/things/CrossLine.vue'

Vue.component('LoadingIcon', LoadingIcon)
Vue.component('cross-line', CrossLine)
Vue.use(mavonEditor);

//设置axios基础地址
function setIpAdress() {
  if (
    window.location.origin === "file://" ||
    window.location.origin === "http://localhost:8080"
  ) {
    axios.defaults.baseURL = "http://42.192.211.76:8083";
  } else {
    axios.defaults.baseURL = window.location.origin + ":8083";
  }
}
setIpAdress();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

