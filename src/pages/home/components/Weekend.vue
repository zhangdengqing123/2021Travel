<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <div class="items">
      <ul>
        <li class="item" v-for="item of list" :key="item.id">
           <div class="item-img-wrapper">
             <img class="item-img" :src="item.imgUrl"/>
           </div>
           <div class="item-info">
             <p class="item-title">{{item.title}}</p>
             <p class="item-desc">{{item.desc}}</p>
           </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Weekend',
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
  .items {
    padding: .15rem;
    padding-bottom: 0;
    .item {
      .item-img-wrapper {
        overflow: hidden;
        width: 100%;
        border-radius: .1rem;
        background: red;
        .item-img {
          width: 100%;
          height: 100%;
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
      }
    }
  }
}
</style>
