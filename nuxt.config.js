module.exports = {
  head: {
    link: [
      {
        color: '#36d1c4',
        href: '/safari-pinned-tab.svg?v=1',
        rel: 'mask-icon'
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
    meta: [
      // charset, viewport and CSP should come first
      {
        charset: 'utf-8'
      },
      {
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        name: 'viewport'
      },
      {
        'http-equiv': 'Content-Security-Policy',
        content: "default-src 'self'"
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge'
      },
      {
        content: '/browserconfig.xml',
        name: 'msapplication-config'
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
  }
};
