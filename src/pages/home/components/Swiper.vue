<template>
  <div class="wrapper">
    <swiper :options="swiperOption"
      :delProps="oneSwiper()"
      v-if="swiperLen"
      style="touch-action: none;">
       <swiper-slide v-for="itemImg of list" :key="itemImg.id">
         <img class="swiper-img" :src="itemImg.imgUrl"/>
       </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 500,
        autoplayDisableOnInteraction: false, // 自动播放不会中断
        paginationClickable: true // 点击圆点切换图片
      }
    }
  },
  computed: {
    swiperLen () {
      return this.list.length
    }
  },
  methods: {
    oneSwiper () {
      if (this.list.length === 1) this.swiperOption.loop = false
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active { /*less里面使用样式穿透*/
  background: cornsilk;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.2%;
  background: rgb(228, 228, 228);
  .swiper-img {
    width: 100%;
  }
}
</style>
