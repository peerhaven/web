export default {
  head () {
    return {
      bodyAttrs: {
        class: 'error-page'
      },
      title: this.error.message + ' · peerhaven'
    };
  },
  props: ['error']
};
