module.exports = {
  /*
   * Headers of the page
   */
  head: {
    titleTemplate: this.title ? this.title + ' · ' : '' + 'E-low',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },

      { hid: 'description', name: 'description', content: 'E-low' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
   * Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  /*
   * Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss': {},
        'postcss-nested': {},
        'autoprefixer': {}
      }
    }
  },
  router: {
    linkActiveClass: 'active'
  }
}
