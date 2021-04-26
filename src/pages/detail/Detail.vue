<template>
  <div>
    <detail-header></detail-header>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :imgs="gallaryImgs"></detail-banner>
    <div class="box">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        responseType: 'json',
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (response) {
      const res = response.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="less" scoped>
.box {
  padding-bottom: 50rem;
}
</style>
