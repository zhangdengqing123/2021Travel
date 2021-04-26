<template>
  <div class="container">
    <div class="list" v-for="(item, index) of list" :key="index">
      <div class="title"><span class="title-icon"></span><span class="th">{{item.title}}</span></div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list> <!--递归组件，使用需要用到组件里的name属性-->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="less" scoped>
@import '~assets/mixins.less';
.container {
  overflow: hidden;;
  .list {
    .title {
       .border1px (#ccc);
      .title-icon {
        position: relative;
        left: .2rem;
        top: .06rem;
        display: inline-block;
        width: .36rem;
        height: .36rem;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
      }
      .th {
        line-height: .8rem;
        font-size: .32rem;
        padding: 0 .2rem;
      }
    }
    .item-children {
      .title {
        padding-left: .2rem;
      }
      .item-children {
        .title {
          padding-left: .4rem;
        }
      }
    }
  }
}
</style>
