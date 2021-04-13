<script src="./error.js"></script>

<template>
  <div class="error-container">
    <img
      alt="aghast emoticon"
      src="~/assets/img/aghast-emoticon.png"
    />
    <h1>Oh snap!</h1>
    <b-message :closable="false" :title="messageTitle" type="is-warning">
      <p>{{ messageBody }}</p>
      <p>
        <nuxt-link class="button" to="/">Back to front page</nuxt-link>
      </p>
    </b-message>
  </div>
</template>
