import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

//引入页面级组件
import Home from '../views/Home.vue'
import Building from '../views/Building.vue'
import AdminBack_Blog from '../views/AdminBack_Blog.vue'
import Blog from '../views/Blog.vue'
import BlogEditor from '../views/BlogEditor.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: '博客首页'
    }
  },
  {
    path: '/building',
    name: 'Building',
    component: Building,
    meta: {
      title: '施工中'
    }
  }, {
    path: '/admin_back',
    redirect: '/admin_back/blog',
  }, {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: '博文页面'
    }
  }, {
    path: '/admin_back/blogEditor',
    name: 'BlogEditor',
    component: BlogEditor,
    meta:{
      title:'博文编辑'
    }
  }, {
    path: '/admin_back/blog',
    name: 'AdminBack_Blog',
    component: AdminBack_Blog,
    meta:{
      title:'后台管理'
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) { //判断是否有标题
    document.title = to.meta.title
  }
  next() //执行进入路由，如果不写就不会进入目标页
})


export default router
