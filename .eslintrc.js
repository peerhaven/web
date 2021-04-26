module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/recommended',
    'semistandard'
  ],

  ignorePatterns: [
    '.git',
    '.nuxt',
    'node_modules'
  ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },

  plugins: ['vue'],

  rules: {
    // allow require statements inside blocks (only if necessary)
    'global-require': 'off',

    // no file extensions in import statements
    'import/extensions': [
      'error',
      'never'
    ],

    // it seems we need this for asset loading
    'import/no-dynamic-require': 'off',

    // allow aliases
    'import/no-unresolved': 'off',

    // allow intentional console output
    'no-console': [
      'error',
      {
        allow: [
          'error',
          'warn'
        ]
      }
    ],

    // allow in single-file components (according to HTML style guide)
    'no-multiple-empty-lines': 'off',

    // operators in multiline expressions at the beginning of the line
    'operator-linebreak': [
      'error',
      'before'
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
