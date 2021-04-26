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

    // it seems we need this for asset loading
    'import/no-dynamic-require': 'off',

    // allow in single-file components (according to HTML style guide)
    'no-multiple-empty-lines': 'off',

    // use alphabetic sorting (script > style > template)
    'vue/component-tags-order': 'off',

    // keep XML conformity
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
    'vue/order-in-components': 'off'
  }
};
