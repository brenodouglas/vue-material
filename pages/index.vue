<template>
  <div>
    <p>

    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderTop from '~components/header'

export default {
  // fetch(context) is called by the server-side
  // and nuxt before instantiating the component
  layout: 'default',
  head: {
    title: 'Home page 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'About page description' }
    ]
  },
  fetch ({ store }) {
    store.commit('increment')
  },
  components: {
    HeaderTop,
  },
  computed: mapState([
    'counter'
  ]),
  methods: {
    increment () { this.$store.commit('increment') }
  }
}
</script>
