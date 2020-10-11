<template>
  <q-item
    clickable
    tag="a"
    :to="to"
    class="q-py-md"
  >
    <q-item-section
      v-if="icon"
      side
      :class="iconColorStyle"
      class="q-pr-sm"
    >
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <!-- <q-item-label
        caption
        :class="captionColorStyle"
      >
        {{ caption }}
      </q-item-label> -->
      <slot name="subnavItem"></slot>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object],
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    subnavItems: {
      type: Array,
      default: () => []
    },
    captionColorStyle: {
      type: String,
      default: ''
    },
    iconColorStyle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>
