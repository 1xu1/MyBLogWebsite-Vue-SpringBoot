import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

Vue.use(mavonEditor);

function setIpAdress() {
  if (
      window.location.origin === "file://" ||
      window.location.origin === "http://localhost:8080"
  ) {
      axios.defaults.baseURL = "http://localhost:8083";
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

