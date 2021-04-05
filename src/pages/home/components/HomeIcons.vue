<template>
  <div class="icon" style="padding-bottom:.1rem">
    <swiper :options="swiperOption">
      <swiper-slide style="touch-action: none;" v-for="(page, index) of pages" :key="index">
        <div class="icon_box" v-for="item of page" :key="item.id">
          <div class="touchheader_img">
            <img :src="item.imgUrl"/>
          </div>
          <span class="touchheader_title">{{item.desc}}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autopaly: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) pages[page] = [] // 创建一个二维数组
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="less" scoped>
@import '~assets/varibles.less';
@import '~assets/mixins.less';
.icon /deep/ .swiper-container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 0;
  padding-bottom: 50%;
.icon_box {
  overflow: hidden;
  display: inline-block;
  width: 22%;
  height: 0;
  padding-bottom: 23%;
  margin: .05rem 1.5%;
  text-align: center;
  .touchheader_img {
    width: @w;
    margin: .13rem auto;
    height: 0;
    padding-bottom: @w;
    img {
      width: 100%;
    }
  }
  .touchheader_title {
    display: inline-block;
    width: 1rem;
    font-size: .24rem;
    .ellipse ();
  }
}
}
</style>
