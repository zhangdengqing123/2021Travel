<template>
  <div class="header">
    <div class="top-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="top-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
      </div>
    <div class="top-right">
      {{city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/varibles.less';
  .header {
    display: flex;
    height: .86rem;
    line-height: .86rem;
    background: @bgColor;
    color: #fff;
    .top-left {
      width: .64rem;
      text-align: center;
    }
    .top-input {
     flex: 1;
     margin-top: .12rem;
     padding-left: .1rem;
     height: .64rem;
     line-height: .64rem;
     border-radius: .1rem;
     background: #fff;
     color: #ccc;
    }
    .top-right {
      width: 1.24rem;
      text-align: center;
      .arrow-icon {
        font-size: .24rem;
      }
    }
  }
</style>
