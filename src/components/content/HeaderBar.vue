<template>
  <q-header class="header">
    <div class="row items-center full-height">
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
        <Logo :logoName="globalDataLogo.name" />
      </div>
      <div class="col full-height"></div>
      <div class="col col-md-auto full-height">
        <NavBar
          iconColorStyle="text-blue-3"
          captionColorStyle="text-blue-3"
          subnavIconColorStyle="text-blue-7"
          :globalDataNav="globalDataNav"
        />
      </div>
    </div>
  </q-header>
</template>

<script>
import Logo from 'components/common/Logo/Logo'
import NavBar from 'components/common/NavBar/NavBar'

import { jsonRequest } from 'boot/axios'

export default {
  components: {
    Logo,
    NavBar
  },
  data () {
    return {
      globalDataLogo: {},
      globalDataNav: [],
      subnavItem: []
    }
  },
  methods: {
    getJsonData () {
      jsonRequest('/api/global.json').then((result) => {
        this.globalDataLogo = result.logo
        this.globalDataNav = result.nav
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getJsonData()
  }
}
</script>

<style lang="scss" scoped>
@import url("~assets/scss/common.scss");
</style>
