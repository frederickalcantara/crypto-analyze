module.exports = {
  modules: [
    ['@nuxtjs/google-analytics'],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-K6TVC66' }]
  ],

  'google-analytics': {
    id: 'UA-128576342-1'
  },
  /*
  ** Set source directory
  */
  srcDir: 'src/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Welcome to Nuxt!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets: ["@vue/app"]
    }
  }
}
