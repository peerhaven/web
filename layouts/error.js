export default {
  created () {
    this.initialiseMessage();
  },
  data () {
    return {
      messageBody: 'An error occurred. Sorry!',
      messageTitle: 'Error'
    };
  },
  head: {
    bodyAttrs: {
      class: 'error-page'
    },
    title: this.error.message + ' · peerhaven'
  },
  methods: {
    initialiseMessage: function () {
      if (this.error.statusCode === 404) {
        this.messageBody = 'The page you were looking for could not be found. If that causes you inconvenience, please get in touch with us.';
        this.messageTitle = 'Page not found';
      }
    }
  },
  props: ['error']
};
