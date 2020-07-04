import Vue from 'vue'
import VueRouter from 'vue-router'
import { getroutes } from '../api/user'
Vue.use(VueRouter)
const routes = [
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
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../page/home/index.vue')
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('../page/user/userlist.vue')
      }
    ]
  }
]
// ele 导航点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    // 加载路由
    const accessRoutes = await getroutes('user/getInfo')
    console.log(accessRoutes)
    // router.addRoutes(accessRoutes)
    return next('/login')
  }
  next()
})

export default router
