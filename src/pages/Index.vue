<template>
  <q-page class="flex">
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      infinite
      control-color="white"
      prev-icon="arrow_left"
      next-icon="arrow_right"
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      arrows
      height="700px"
      class="bg-purple text-white full-width"
    >
      <q-carousel-slide
        name="style"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="style"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="tv"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="live_tv"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="layers"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="layers"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="map"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="terrain"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>


export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
