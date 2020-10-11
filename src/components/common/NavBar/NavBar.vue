<template>
  <div
    ref="navBar"
    class="row item-center full-height"
  >
    <NavBarItem
      v-for="navItem in globalDataNav"
      :key="navItem.index"
      :title="navItem.title"
      :caption="navItem.caption"
      :icon="navItem.icon"
      :to="navItem.url"
      :captionColorStyle="captionColorStyle"
      :iconColorStyle="iconColorStyle"
      class="col col-md-auto"
    >
      <template slot="subnavItem">
        <q-menu
          anchor="bottom left"
          self="top middle"
          v-show="navItem.subNav.length > 0"
        >
          <q-list
            style="min-width: 100px"
            separator
          >
            <q-item
              clickable
              v-close-popup
              v-for="subnavItem in navItem.subNav"
              :key="subnavItem.index"
              to="subnavItem.subUrl"
              class="q-py-md"
            >
              <q-item-section
                v-if="subnavItem.icon"
                side
                :class="subnavIconColorStyle"
                class="q-pr-sm"
              >
                <q-icon :name="subnavItem.icon" />
              </q-item-section>
              <q-item-label>{{ subnavItem.subTitle }}</q-item-label>
            </q-item>
          </q-list>
        </q-menu>
      </template>
    </NavBarItem>
  </div>
</template>

<script>
import NavBarItem from 'components/common/NavBar/NavBarItem'

export default {
  name: 'NavBar',
  components: {
    NavBarItem
  },
  props: {
    globalDataNav: {
      type: Array,
      default: () => {}
    },
    captionColorStyle: {
      type: String,
      default: ''
    },
    iconColorStyle: {
      type: String,
      default: ''
    },
    subnavIconColorStyle: {
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
<style scoped>
.q-item {
  min-height: 0;
}
.q-item__label {
  line-height: normal !important;
}
</style>
