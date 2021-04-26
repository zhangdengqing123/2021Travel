<template>
  <div class="container" @click="closeGallery">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallery-img" style="touch-action: none;" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gallery',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    closeGallery () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
.container /deep/ .swiper-container {overflow: inherit}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    background:green;
    .gallery-img{
      width: 100%;
      height: 375px;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
