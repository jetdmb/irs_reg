const { resolve, join } = require('path')

module.exports = {
  build: {
    filenames: {
      css: 'app.css', // default: style.css
      vendor: 'vendor.js', // default: vendor.bundle.js
      app: 'app.js' // default: nuxt.bundle.js
    },
    vendor: ['vee-validate']
  },
  plugins: [
    '~plugins/vee_validate.js'
  ],
  css: [
    // Load a node.js module
    'bulma/css/bulma.css',
    // node.js module but we specify the lang
    //{ src: 'bulma', lang: 'sass' },
    // Css file in the project
    // It is important to give an absolute path
    //resolve(__dirname, 'css/main.css')
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  }
}