<template>
  <header :class="$style.header">
    <div :class="$style.inner">
      <NavLink link="/">
        <h1 :class="$style.title">Tanpopo</h1>
      </NavLink>
      <NavLink
        link="https://github.com/TanpopoApp/tanpopo/releases/latest"
        :class-name="$style.download"
      >
        Download
      </NavLink>
    </div>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="postcss" module>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 100%;
  border-bottom: 1px solid var(--color-border);
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

.title {
  font-size: 24px;
}

.download {
  display: flex;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}
</style>
