<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <div class="items">
      <ul>
        <li class="item" v-for="item of list" :key="item.id">
           <div class="item-img-wrapper">
             <img class="item-img" :src="item.imgUrl"/>
           </div>
           <div class="item-info">
             <p class="item-title">{{item.title}}</p>
             <p class="item-desc">{{item.desc}}</p>
             <button class="item-btn">查看详情</button>
           </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  props: {
    list: Array
  }
}
</script>
<style lang="less" scoped>
 @import '~assets/mixins.less';
.recommend {
  .title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    font-size: .28rem;
  }
  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    .item-img-wrapper {
      .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
        border-radius: .15rem;
      }
    }
    .item-info {
      flex: 1;
      padding: .1rem;
      min-width: 0;
      .item-title {
        line-height: .54rem;
        .ellipse ();
        font-size: .32rem;
      }
      .item-desc {
        line-height: .4rem;
        .ellipse ();
        color: #ccc;
      }
      .item-btn {
        line-height: .44rem;
        margin-top: .16rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
      }
    }
  }
}
</style>
