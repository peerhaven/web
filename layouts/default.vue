<script>
import consoleWarningSelfXSS from '~/mixins/console/warning-self-xss';

export default { mixins: [consoleWarningSelfXSS] };
</script>

<template>
  <nuxt />
</template>
