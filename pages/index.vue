<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: [
          'has-background-primary',
          'has-content-centered',
          'p-5'
        ]
      }
    };
  }
};
</script>





<template>
  <base-image
    fallback="png"
    filename="ph-circle-darkgrey-white-transparent"
    info="Peerhaven logo"
  />
</template>
