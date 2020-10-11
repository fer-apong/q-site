<template>
  <q-btn
    flat
    class="q-py-sm q-mx-sm"
    type="a"
    to="/home"
  ><img
      src="~assets/images/common/logo.png"
      :alt="logoName"
      height="40px"
    >
  </q-btn>
</template>

<script>
export default {
  props: {
    logoName: {
      type: String,
      default: '网站名称'
    }
  }

}
</script>

<style>
</style>
