import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LOGIN from './views/Login.vue'
import REGISTER from './views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: LOGIN
    },
    {
      path: '/register',
      name: 'register',
      component: REGISTER
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
