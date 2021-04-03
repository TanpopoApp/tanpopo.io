<template>
  <a :target="target" :rel="rel" :class="className" :href="link">
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavLink extends Vue {
  @Prop({ default: '' }) readonly className!: string;
  @Prop({ default: '' }) readonly link!: string;

  get isExternal() {
    return /^(https?:|mailto:|tel:)/.test(this.link);
  }

  get target() {
    if (this.isExternal) {
      return '_blank';
    } else {
      return undefined;
    }
  }

  get rel() {
    if (this.isExternal) {
      return 'noopener noreferrer';
    } else {
      return undefined;
    }
  }
}
</script>
