<template>
  <div :class="$style.container">
    <article :class="$style.inner">
      <section :class="$style.intro">
        <div :class="$style.introDesc">
          <p :class="$style.introTitle">
            Across the Great Wall, we can reach every corner in the world.
          </p>
          <NavLink
            link="https://github.com/TanpopoApp/tanpopo/releases/latest"
            :class-name="$style.introDownload"
          >
            Download
          </NavLink>
        </div>
        <div :class="$style.introImage">
          <img
            src="~/assets/tanpopo.png"
            alt="tanpopo preview"
            :class="$style.image"
          />
        </div>
      </section>
      <section :class="$style.features">
        <p :class="$style.featuresTitle">Support Trojan Protocol.</p>
        <div :class="$style.featuresList">
          <div :class="$style.featuresDetail">
            <img src="~/assets/fast.svg" width="64" height="64" alt="fast" />
            <p :class="$style.featuresCaption">Fast</p>
            <p :class="$style.featuresDesc">So fast connect to the world.</p>
          </div>
          <div :class="$style.featuresDetail">
            <img src="~/assets/easy.svg" width="64" height="64" alt="easy" />
            <p :class="$style.featuresCaption">Easy</p>
            <p :class="$style.featuresDesc">Very easy to use for everyone.</p>
          </div>
          <div :class="$style.featuresDetail">
            <img
              src="~/assets/cross_platform.svg"
              width="64"
              height="64"
              alt="cross platform"
            />
            <p :class="$style.featuresCaption">Cross platform</p>
            <p :class="$style.featuresDesc">Support Windows, Mac and Linux.</p>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>

<style lang="postcss" module>
@import '@/styles/variables.css';

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 16px;
}
.image {
  max-width: 100%;
  height: auto;
}
.intro {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 560px;

  &Desc {
    width: 40%;
    flex: none;
  }

  &Title {
    font-size: 24px;
    font-weight: 700;
  }

  &Download {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 40px;
    padding: 0 16px;
    margin-top: 24px;
    font-size: 16px;
    border-radius: 4px;
    color: var(--color-white);
    background-color: var(--color-primary);

    &:hover,
    &:focus {
      color: var(--color-white);
      opacity: 0.8;
    }
  }

  &Image {
    display: flex;
    margin-left: 24px;
  }
}

.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 560px;

  &Title {
    width: 100%;
    font-size: 24px;
    font-weight: 700;
  }

  &List {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
  }

  &Detail {
    width: 30%;
    min-height: 240px;
    padding: 40px;
    background-color: var(--color-white);
  }

  &Caption {
    margin: 16px 0;
    font-size: 18px;
    font-weight: 700;
  }

  &Desc {
    margin: 16px 0;
    color: var(--color-secondary);
  }
}

@media screen and (max-width: $Mobile) {
  .intro {
    flex-direction: column;

    &Desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin: 24px;
      text-align: center;
    }

    &Image {
      display: flex;
      width: 100%;
      margin-left: 0;
    }
  }

  .features {
    &List {
      flex-direction: column;
    }
    &Detail {
      width: 100%;
      margin: 16px 0;
    }
  }
}
</style>
