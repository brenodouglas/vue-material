const { join } = require('path')

module.exports = {
  build: {
    vendor: ['axios', 'vue-material']
  },
  css: [
    join(__dirname, 'css/styles.css')
  ],
  plugins: [
    '~plugins/vue-material.js'
  ]
}
