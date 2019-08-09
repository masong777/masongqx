import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Geren from '@/components/Geren.vue'
import Suoyou from '@/components/Suoyou.vue'
import Add from '@/components/Add.vue'
import Tianjia from '@/components/Tianjia.vue'
import Yuangong from '@/components/Yuangong.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/geren',
      name: 'geren',
      component: Geren
    },
    {
      path: '/suoyou',
      name: 'suoyou',
      component: Suoyou
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/tianjia',
      name: 'tianjia',
      component: Tianjia
    },
    {
      path: '/yuangong',
      name: 'yuangong',
      component: Yuangong
    },
  
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
