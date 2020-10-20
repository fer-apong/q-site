<template>
  <q-page class="flex">
    <!-- banner -->
    <div
      class="row full-width"
      style="height:700px"
    >
      <div class="col">
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
            :img-src="bannerItem.src"
            :name="bannerItem.id"
          />
        </q-carousel>
      </div>
    </div>
    <!-- feature -->
    <div class="row full-width">
      <div class="col gt-md q-pa-lg border"></div>
      <div class="col gt-md q-pa-lg border"></div>
      <div class="col gt-md q-pa-lg border"></div>
      <div class="col gt-md q-pa-lg border"></div>
    </div>
  </q-page>
</template>

<script>
import { jsonRequest } from 'boot/axios'

export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      dataHomeBanner: []
    }
  },
  methods: {
    getJsonData () {
      jsonRequest('/api/global.json').then(result => {
        this.dataHomeBanner = result.banner
        // console.log(result)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getJsonData()
  }
}
</script>
