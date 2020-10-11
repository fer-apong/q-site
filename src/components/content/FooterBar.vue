<template>
  <q-footer class="bg-primary">
    <div class="row">
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
        <Logo :logoName="globalDataLogo.name" />
        <p class="q-pl-lg q-mb-none">{{globalDataCompany.cnName}}</p>
        <p class="q-pl-lg q-mb-sm text-xs text-weight-thin text-blue-4">{{globalDataCompany.enName}}</p>
      </div>
      <div class="col"></div>
      <div class="col col-md-auto text-right">
        <div class="q-pa-md">
          <p class="q-mb-xs">
            <q-icon
              name="place"
              class="q-mr-sm"
            />{{globalDataCompany.address}}
          </p>
          <p class="q-mb-xs">
            <q-icon
              name="local_phone"
              class="q-mr-sm"
            />服务专员：{{globalDataCompany.serviceTel}}
            <q-icon
              name="local_post_office"
              class="q-mr-sm q-ml-md"
            />电子邮箱：{{globalDataCompany.eMail}}
          </p>
          <p class="q-mb-xs text-blue-4">Copyright 2019 by Ncitysoft.com All Right Reserved.
            <q-btn
              flat
              type="a"
              target="_blank"
              :href="globalDataCompany.icpLink"
              :label="globalDataCompany.icpNumber"
            />
          </p>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script>
import Logo from 'components/common/Logo/Logo'

import { jsonRequest } from 'boot/axios'

export default {
  components: {
    Logo
  },
  props: {

  },
  data () {
    return {
      globalDataLogo: {},
      globalDataCompany: {}
    }
  },
  methods: {
    getJsonData () {
      jsonRequest('/api/global.json').then((result) => {
        this.globalDataLogo = result.logo
        this.globalDataCompany = result.company
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
<style scoped>
</style>
