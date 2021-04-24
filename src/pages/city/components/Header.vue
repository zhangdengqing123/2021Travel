<template>
  <div class="cityHeader">
    <div class="top-left">
      <span class="iconfont" @click="routerLink">&#xe624;</span>
    </div>
    <div class="option">城市选择</div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    routerLink () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>
@import '~assets/varibles.less';
  .cityHeader {
    z-index: 10;
    position: relative;
    display: flex;
    height: @lineHeight;
    line-height: @lineHeight;
    background: @bgColor;
    .top-left {
      width: .64rem;
      text-align: center;
      .iconfont {
        color:@cWhite;
      }
    }
    .option {
      box-sizing: border-box;
      flex: 1;
      padding-right: .6rem;
      font-size: .28rem;
      text-align: center;
      color: @cWhite;
    }
  }
</style>
