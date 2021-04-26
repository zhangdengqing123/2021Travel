<template>
  <div class="box">
    <div class="search">
      <input class="ipt" v-model="keyword" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-list" ref="search" v-show="keyword">
      <ul>
        <li class="item"
          v-for="item of list"
          :key="item.id"
          @click="handleClickCity(item.name)"
        >
        {{item.name}}</li>
        <li class="item" v-show="hasData">未匹配到相关城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  updated () {
    this.scroll.refresh()
  },
  methods: {
    handleClickCity (city) {
      this.$store.commit('getCity', city)
      this.$router.push('/')
      this.keyword = ''
    }
  },
  computed: {
    hasData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => { // 创建节流
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.search, {
          click: true
        })
      }
    })
  }
}
</script>
<style lang="less" scoped>
@import "~assets/varibles.less";
@import "~assets/mixins.less";
.box {
  .search {
    z-index: 9;
    position: relative;
    padding: 0 0.1rem;
    height: 0.72rem;
    background: @bgColor;
    .ipt {
      box-sizing: border-box;
      width: 100%;
      height: 0.62rem;
      line-height: 0.62rem;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
      text-align: center;
      color: #666;
    }
  }
  .search-list {
    z-index: 1;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    .item {
      padding-left:.2rem ;
      line-height: .62rem;
      .border1px(#eee);
      font-size: .28rem;
      background: #fff;
      color: #666;
    }
  }
}
</style>
