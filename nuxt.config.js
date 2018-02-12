const conf = require('./config/conf');

module.exports = {
  head: {
    title: 'starter',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  dev: (process.env.NODE_ENV !== 'production'),
  cache: true,
  css: [
    {
      src: '~/assets/theme/index.css'
    },
    {
      src: '~/assets/css/main.less',
      lang: 'less'
    },
    {
      src: 'bootstrap/scss/bootstrap.scss',
      lang: 'scss'
    }
  ],
  plugins: [
    {
      src: '~plugins/element-ui',
      ssr: true
    },
    {
      src: '~plugins/bootstrap.js',
      ssr: false
    }
  ],
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  axios: {
    credentials: true,
    baseURL: conf.axios.baseURL,
    requestInterceptor: (config, {store, route, app: {router}}) => {
      console.log(config, store, route, router);
      // if (store.state.token) {
      //     config.headers.common['Authorization'] = 'aaaaa';
      // }
      return config;
    }
  },
  build: {
    vendor: [
      'jquery',
      'lodash',
      'element-ui',
      'bootstrap'
    ],
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')()
    ],
    babel: {
      plugins: [['component', [
        {
          libraryName: 'element-ui'
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]]
    },
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type);
      }
    }
  }
};
