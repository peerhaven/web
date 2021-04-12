<script src="./error.js"></script>

<style lang="scss">
article.message .media {
  color: $turquoise;
}
</style>

<template>
  <div class="error-container">
    <img
      alt="aghast emoticon"
      src="~/assets/img/aghast-emoticon.png"
    />
    <h1>Oh snap!</h1>
    <article class="message is-warning">
      <div class="message-header">
        <h2 v-if="error.statusCode === 404">Page not found</h2>
        <h2 v-else>An error occurred</h2>
      </div>
      <div class="message-body">
        <p>
          At some point, someone has somehow made a mistake.
          If you believe it was us, please get in touch.
        </p>
        <p>
          Otherwise, may we offer you a
          <nuxt-link class="button" to="/">link back to our front page</nuxt-link>?
        </p>
      </div>
    </article>
    <b-message title="Warning" type="is-warning" v-bind:closable="false">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
    </b-message>
  </div>
</template>
