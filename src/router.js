import Vue from 'vue'
import Router from 'vue-router'

import ppHome from './views/Home.vue'
import ppMenu from './views/Menu.vue'
import ppAdmin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ppHome
    },
    {
      path: '/menu',
      name: 'menu',
      component: ppMenu
    },
    {
      path: '/admin',
      name: 'admin',
      component: ppAdmin
    }
  ]
})
