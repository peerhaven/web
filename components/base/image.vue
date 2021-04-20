<script>
export default {
  data () {
    return {
      pixelRatioList: [
        '1.0x',
        '1.5x',
        '2.0x',
        '3.0x',
      ]
    };
  },

  methods: {
    getSource: function (extension) {
      return getImagePath(
        this.pixelRatioList[0],
        this.filename,
        extension
      );
    },

    getSourceSet: function (extension) {
      let value = this.getSource(extension);

      // intentionally starting at 1 because first pixel ratio already in value
      for (let i = 1; i < this.pixelRatioList.length; i++) {
        let imagePath = getImagePath(
          this.pixelRatioList[i],
          this.filename,
          extension
        );
        value += `, ${imagePath} ${this.pixelRatioList[i]}`;
      }

      return value;
    }
  },

  props: {
    fallback: {
      required: true,
      type: String
    },
    filename: {
      required: true,
      type: String
    },
    info: String
  }
};

/**
 * Example output:
 * - in development: /_nuxt/assets/img/png/1.0x/happy-emoji.png
 * - in production: /_nuxt/img/happy-emoji.d0882ca.png
 */
function getImagePath(pixelRatio, filename, extension) {
  let relativePath = `${extension}/${pixelRatio}/${filename}.${extension}`;

  // request the image via webpack by using `require`
  // https://blog.lichter.io/posts/dynamic-images-vue-nuxt/
  return require('~/assets/img/' + relativePath);
}
</script>





<template>
  <picture>
    <source :srcset="getSourceSet('webp')" />
    <img
      :alt="info"
      :srcset="getSourceSet(fallback)"
      :src="getSource(fallback)"
    />
  </picture>
</template>
