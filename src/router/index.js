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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
