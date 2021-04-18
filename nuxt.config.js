require('dotenv').config(); // parse .env file

export default {
  build: {
    maxChunkSize: 300000, // split into smaller files
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          // see https://github.com/buefy/buefy/issues/306
          // and https://github.com/nuxt/nuxt.js/issues/1670
          warnings: false
        }
      }
    }
  },

  buildModules: ['@nuxtjs/style-resources'],
  components: true, // auto import components
  css: ['assets/scss/main'],

  head: {
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        color: '#36d1c4',
        href: '/safari-pinned-tab.svg?v=1',
        rel: 'mask-icon'
      },
      {
        href: '//fonts.googleapis.com/css?family=Comfortaa:300&amp;subset=cyrillic,cyrillic-ext,greek,latin-ext',
        rel: 'stylesheet'
      },
      {
        href: '//fonts.googleapis.com/css?family=Maven+Pro:400,500&amp;subset=latin-ext',
        rel: 'stylesheet'
      },
      {
        href: '/apple-touch-icon.png?v=1',
        rel: 'apple-touch-icon',
        sizes: '180x180'
      },
      {
        href: '/favicon-16x16.png?v=1',
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        href: '/favicon-32x32.png?v=1',
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        href: '/favicon.ico?v=1',
        rel: 'shortcut icon'
      },
      {
        href: '/site.webmanifest?v=1',
        rel: 'manifest'
      }
    ],
    meta: [ // charset and viewport should come first
      {
        charset: 'utf-8'
      },
      {
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        name: 'viewport'
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge'
      },
      {
        content: '#36d1c4',
        name: 'msapplication-TileColor'
      },
      {
        content: '#36d1c4',
        name: 'theme-color'
      },
      {
        content: '/browserconfig.xml',
        name: 'msapplication-config'
      },
      {
        content: 'index,follow',
        name: 'googlebot'
      },
      {
        content: 'index,follow',
        name: 'robots'
      },
      {
        content: 'yes',
        name: 'mobile-web-app-capable'
      },
      {
        content: 'peerhaven',
        name: 'apple-mobile-web-app-title'
      },
      {
        content: 'peerhaven',
        name: 'application-name'
      },
      {
        content: 'peerhaven is a place for you to save and share your bookmarks.',
        name: 'description'
      }
    ],
    title: 'peerhaven'
  },

  loading: { // custom progress bar
    color: '#f6318c',
    continuous: true,
    failedColor: '#ff3860'
  },

  modules: [
    [
      'nuxt-buefy',
      {
        css: false // use SCSS imports instead
      }
    ],
    [
      'nuxt-matomo',
      {
        cookies: true,
        matomoUrl: process.env.MATOMO_URL,
        siteId: process.env.MATOMO_SITE_ID
      }
    ]
  ],

  render: {
    csp: true // see https://github.com/nuxt/nuxt.js/pull/2549
  },

  styleResources: {
    scss: ['./assets/scss/implicit.scss']
  }
};
