<template>
  <div :class="$style.app">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Default extends Vue {}
</script>

<style lang="postcss" module>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
