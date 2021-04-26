import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('pages/detail/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) { // 按下 前进/后退，按钮时 保存当前页面位置
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
