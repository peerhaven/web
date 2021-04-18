<script>
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

  head () {
    return {
      bodyAttrs: {
        class: 'has-background-primary  has-content-centered  has-text-white'
      },
      title: this.error.message + ' · peerhaven'
    };
  },

  methods: {
    initialiseMessage: function () {
      if (this.error.statusCode === 404) {
        this.messageBody = 'The page you were looking for could not be found. If that causes you inconvenience, please get in touch with us.';
        this.messageTitle = 'Page not found';
      }
    }
  },

  props: {
    error: {
      required: true,
      type: Object
    }
  }
};
</script>





<style lang="scss" scoped>
/*
 * Extend message component: Bulma > Buefy > ph >
 */

.message {
  max-width: 30rem;

  // has to be nested because it styles a sub component
  &::v-deep > .message-header {
    justify-content: center;
  }
}
</style>





<template>
  <div>
    <img
      alt="aghast emoticon"
      src="~/assets/img/aghast-emoticon.png"
    />
    <h1>Oh snap!</h1>

    <b-message
      :closable="false"
      :title="messageTitle"
      type="is-warning"
    >
      <p>{{ messageBody }}</p>
      <p>
        <nuxt-link
          class="button"
          to="/"
        >
          Back to front page
        </nuxt-link>
      </p>
    </b-message>
  </div>
</template>
