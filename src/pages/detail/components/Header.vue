<template>
  <div class="detail-header">
    <router-link to="/" custom v-slot="{ navigate }">
      <div class="detail-abs" @click="navigate" v-show="isShowAbs">
        <span class="iconfont back-abs">&#xe624;</span>
      </div>
    </router-link>
    <div class="detail-fiexd" v-show="!isShowAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont back-fiexd">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShowAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log('scroll')
      const top = document.documentElement.scrollTop || document.body.scrollTop
      let opacity = ''
      if (top > 60) {
        opacity = top / 120
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.isShowAbs = false
      } else {
        this.isShowAbs = true
      }
    }
  },
  mounted () { // 进入页面激活缓存组件
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () { // 离开当前页面解除 scroll 事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
@import '~assets/varibles.less';
.detail-header {
  position: relative;
  .detail-abs {
    z-index: 1;
    position: absolute;
    top: .2rem;
    left: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    border-radius: .4rem;
    background: rgba(0, 0, 0, .8);
    .back-abs {
     font-size: .4rem;
     color: #fff;
    }
  }
  .detail-fiexd {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: @lineHeight;
    line-height: @lineHeight;
    text-align: center;
    background: @bgColor;
    color: #fff;
    .back-fiexd {
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
}
</style>
