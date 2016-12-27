const { join } = require('path')

module.exports = {
  build: {
    vendor: ['axios']
  },
  css: [
    join(__dirname, 'css/styles.css')
  ],
  head: {
    titleTemplate: '%s - Associação filhos do pai eterno',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  }
}
