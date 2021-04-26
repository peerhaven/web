# Vue style guide

This document is based on the [official Vue style guide](https://vuejs.org/v2/style-guide/) and differs as follows.

## Contents

- [Component tags order](#component-tags-order)
- [HTML self-closing tags](#html-self-closing-tags)
- [Order of properties in components](#order-of-properties-in-components)

## Component tags order

ESLint rule: [`vue/component-tags-order`](https://eslint.vuejs.org/rules/component-tags-order.html)

Alphabetic sorting:

```html
<script></script>
<style></style>
<template></template>
```

## HTML self-closing tags

ESLint rule: [`vue/html-self-closing`](https://eslint.vuejs.org/rules/html-self-closing.html)

We strive for HTML and XML conformity:

```html
<div></div>
<img />
<CustomComponent />
```

## Order of properties in components

ESLint rule: [`vue/order-in-components`](https://eslint.vuejs.org/rules/order-in-components.html)

Alphabetic sorting:

```javascript
export default {
  data () {
    return {
      msg: 'Welcome to our app'
    }
  },

  name: 'app',

  props: {
    propA: Number
  }
};
```
