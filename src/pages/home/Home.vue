<template>
  <div class="home">
    <t-header></t-header>
    <t-swiper :list="swiperList"></t-swiper>
    <t-icons :list="iconList"></t-icons>
    <t-recommend :list="recommendList"></t-recommend>
    <t-weekend :list="weekendList"></t-weekend>
  </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import HomeIcons from './components/HomeIcons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    't-header': Header,
    't-swiper': Swiper,
    't-icons': HomeIcons,
    't-recommend': Recommend,
    't-weekend': Weekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city, {
        responseType: 'json'
      }).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (response) {
      const res = response.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  created () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  activated () { // 缓存组件激活时, 重新渲染页面
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
