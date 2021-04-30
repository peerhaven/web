<script>
export default {
  computed: {
    errorMessage () {
      return String(this.error.message);
    },

    errorStatusCode () {
      return Number(this.error.statusCode);
    }
  },

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
        class: [
          'has-background-primary',
          'has-content-centered',
          'has-text-centered',
          'has-text-white',
          'p-5'
        ]
      },

      title: `${this.errorMessage} · Peerhaven`
    };
  },

  methods: {
    initialiseMessage () {
      if (this.errorStatusCode === 404) {
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





<template>
  <main>
    <base-image
      fallback="png"
      filename="aghast-emoji"
      info="aghast emoji"
    />
    <h1 class="mb-6">
      Oh snap!
    </h1>

    <b-message
      :closable="false"
      :title="messageTitle"
      class="is-compact"
      type="is-warning"
    >
      <p class="block">
        {{ messageBody }}
      </p>
      <p class="block">
        <nuxt-link
          class="button"
          to="/"
        >
          Back to front page
        </nuxt-link>
      </p>
    </b-message>
  </main>
</template>
