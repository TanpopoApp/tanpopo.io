<template>
  <footer :class="$style.footer">
    <div :class="$style.inner">&copy; Tanpopo</div>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="postcss" module>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-white);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1200px;
  width: 100%;
  padding: 0 16px;
}
</style>
