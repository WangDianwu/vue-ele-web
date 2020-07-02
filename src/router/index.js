import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Layout from '@/components/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../page/login/index.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/layout/layout'),
      redirect: '/home',
      children: [{
        path: '/Home',
        name: 'Home',
        component: () => import('../page/home/index.vue')
      }]
    }
  ]
})
