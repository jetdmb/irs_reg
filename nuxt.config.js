const { resolve, join } = require('path')

module.exports = {
  build: {
    filenames: {
      css: 'app.css', // default: style.css
      vendor: 'vendor.js', // default: vendor.bundle.js
      app: 'app.js' // default: nuxt.bundle.js
    },
    vendor: ['validator', 'vuelidate', 'moment', "plupload", './node_modules/qiniu-js/dist/qiniu.js']
  },
  plugins: ["~plugins/vuelidate.js"],
  loading: false,
  css: [
    // Load a node.js module
    'font-awesome/css/font-awesome.css',
    'bulma/css/bulma.css',
    'assets/loading.css',
    'assets/custom.css'
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