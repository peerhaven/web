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
