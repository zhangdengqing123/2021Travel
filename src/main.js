import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/reset.css'
import 'assets/border.css'
import 'assets/iconfont.css' // 字体图标
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper) // 使用轮播图效果

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
