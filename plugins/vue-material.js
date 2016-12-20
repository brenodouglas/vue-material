import Vue from 'vue'

if (process.BROWSER_BUILD) {
  const VueMaterial = require('vue-material')
  Vue.use(VueMaterial)
  // Vue.material.theme.register('default', {
  //   primary: 'blue',
  //   accent: 'red'
  // })
}
