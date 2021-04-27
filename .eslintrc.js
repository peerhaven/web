module.exports = {
  extends: [
    './node_modules/@peerhaven/peerhaven/.eslintrc.js',
    'plugin:vue/recommended'
  ],

  ignorePatterns: ['.nuxt'],
  plugins: ['vue'],
  root: true,

  rules: {
    // allow in single-file components (according to HTML style guide)
    'no-multiple-empty-lines': [
      'error',
      { max: 5 }
    ],

    // use alphabetic sorting
    'vue/component-tags-order': [
      'error',
      {
        order: [
          'script',
          'style',
          'template']
      }
    ],

    // keep HTML and XML conformity
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'never',
          void: 'always'
        }
      }
    ],

    // use alphabetic sorting
    'vue/order-in-components': [
      'error',
      {
        order: [
          'activated',
          'asyncData',
          'beforeCreate',
          'beforeDestroy',
          'beforeMount',
          'beforeUpdate',
          'comments',
          'components',
          'computed',
          'created',
          'data',
          'deactivated',
          'delimiters',
          'destroyed',
          'directives',
          'el',
          'emits',
          'errorCaptured',
          'extends',
          'fetch',
          'filters',
          'functional',
          'head',
          'inheritAttrs',
          'inject',
          'key',
          'layout',
          'loading',
          'methods',
          'middleware',
          'mixins',
          'model',
          'mounted',
          'name',
          'parent',
          'props',
          'propsData',
          'provide',
          'render',
          'renderError',
          'scrollToTop',
          'setup',
          'template',
          'transition',
          'updated',
          'validate',
          'watch',
          'watchQuery'
        ]
      }
    ]
  }
};
