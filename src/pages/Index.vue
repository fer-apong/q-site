<template>
  <q-page class="flex">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      :autoplay="3000"
      class="full-width"
      height="700px"
    >
      <q-carousel-slide
        v-for="(bannerItem, index) in dataHomeBanner"
        :key="index"
        :img-src="bannerItem.image"
        :name="index+1"
      />

    </q-carousel>
  </q-page>
</template>

<script>
import { getHomeData } from 'network/api'

export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      dataHomeBanner: []
    }
  },
  methods: {
    getRemoteData () {
      getHomeData().then(result => {
        // this.dataHomeBanner = result.data.banner.list
        console.log(result)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getRemoteData()
  }
}
</script>
