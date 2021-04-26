<template>
  <div>
    <div class="banner" @click="handleGalleryClick">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span> {{imgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
       <template>
         <gallery :imgs="imgs" v-show="showGallery" @close="closeGallery"></gallery>
       </template>
    </fade-animation>
  </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    imgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    Gallery,
    FadeAnimation
  },
  methods: {
    handleGalleryClick () {
      this.showGallery = true
    },
    closeGallery () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  background: mediumpurple;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #fff;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)); // css渐变色
    .banner-title {
      flex: 1;
      padding: 0 .2rem;
      font-size: .28rem;
    }
    .banner-number {
      height: .32rem;
      line-height: .32rem;
      margin: .14rem .1rem 0 0;
      padding: 0 .2rem;
      border-radius: .2rem;
      font-size: .28rem;
      background: rgba(0, 0, 0, .8);
      .banner-icon {
        font-size: .24rem;
      }
    }
  }
}
</style>
