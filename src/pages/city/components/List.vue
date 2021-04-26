<template>
  <div class="box" ref="wrapper">
    <div class="content">
      <div class="city-list">
        <div class="title border-bottom">当前位置</div>
        <div class="btn-list">
          <div class="btn-warpper">
            <div class="btn">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="city-list">
        <div class="title border-bottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-warpper"
            v-for="item of hot"
            :key="item.id"
            @click="handleClickCity(item.name)"
          >
            <div class="btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="city-list"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-bottom" ref="top">{{key}}</div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom" @click="handleClickCity(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'List',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  updated () { // 当betterScroll发生改变得实际执行
    this.scroll.refresh()
  },
  activated () { // 当缓存组件被激活时，调用
    if (this.scroll) {
      this.scroll.refresh()
    }
  },
  computed: {
    ...mapState({
      city: 'city' // `this.city` 映射为 `this.$store.state.city`
    })
  },
  methods: {
    handleClickCity (city) {
      this.getCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['getCity']) // `this.handleClickCity(参数)` 映射为 `this.$store.commit(getCity,参数)`
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0] // 获取元素
        this.scroll.scrollToElement(element, 300) // 滑动的元素位置
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          click: true
        })
      }
    })
  }
}
</script>
<style lang="less" scoped>
.box {
  position: absolute;
  overflow: hidden;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .city-list {
    .title {
      line-height: 0.54rem;
      background: #eee;
      padding-left: 0.2rem;
      font-size: 0.26rem;
      color: #666;
    }
    .border-bottom {
      &::before {
        border-bottom: 1px #ccc solid;
      }
    }
    .btn-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;
      .btn-warpper {
        width: 33.33%;
        text-align: center;
        .btn {
          margin: 0.1rem;
          padding: 0.1rem 0;
          border: solid 1px #ccc;
          border-radius: 0.06rem;
          font-size: 0.26rem;
        }
      }
    }
    .item-list {
      .item {
        line-height: 0.76rem;
        padding-left: 0.2rem;
      }
    }
  }
}
</style>
