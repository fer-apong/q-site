<template>
  <q-layout view="hHh lpr fff">
    <HeaderBar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterBar />
  </q-layout>
</template>

<script>
import HeaderBar from 'components/content/HeaderBar'
import FooterBar from 'components/content/FooterBar'

export default {
  components: {
    HeaderBar,
    FooterBar
  }
}

</script>

<style lang="stylus" scoped></style>
