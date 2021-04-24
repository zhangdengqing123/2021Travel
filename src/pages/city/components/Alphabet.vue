<template>
  <div class="alphabet">
    <ul class="list">
      <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cityAlphabet: Object
  },
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  computed: {
    letters () { // 创建一个数组用来存放字母循环，并得到数组里面的每个字母
      const letter = []
      for (const i in this.cityAlphabet) {
        letter.push(i)
      }
      return letter
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText) // 点击改变左边对应的位置
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) { // 使用节流
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.$refs.A[0].offsetTop // 字母A距离顶部的距离
          const touchY = e.touches[0].clientY - 79 // 求手指滑动字母距离顶部的位置
          const index = Math.floor((touchY - startY) / 20) // 求出当前字母索引下标
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]) // 关联左侧字母内容的显示
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/varibles.less';
.alphabet{
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item {
      line-height: .4rem;
      text-align: center;
      font-size: .28rem;
      color: @bgColor;
    }
  }
}
</style>
