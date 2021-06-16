<template>
  <div id="hero" class="uk-position-relative" :class="{'is-loaded': isLoaded}">
    <div class="uk-grid uk-grid-collapse uk-grid-match" uk-grid>
      <div class="hero-left uk-width-auto">
        <div class="uk-height-1-1 uk-flex uk-flex-middle">
          <div id="hero-content" class="uk-margin-top">
            <h3 class="uk-h2 uk-margin-small uk-animation-slide-bottom-medium">
              {{ subtitle }}
            </h3>   
            <h1 class="uk-heading-medium uk-text-bold tm-font-deco uk-margin-remove-top uk-animation-slide-bottom-medium">
              {{ headline }}
            </h1>
            <p class="uk-width-5-6@m uk-animation-slide-bottom-medium">
              {{ text }}
            </p>
          </div>   
        </div>
      </div>
      <div class="hero-right uk-width-auto">
        <div class="reveal-anim reveal-anim-long uk-position-relative uk-overflow-hidden">
          <nuxt-picture 
            :src='`${img}`' 
            format="webp"
            class="tm-object-fit uk-display-block uk-width-1-1 uk-height-1-1"
            sizes="xs:380px sm:640px md:1024px lg:700px"
          />
        </div>
      </div>
    </div>
    <HeroBar />
  </div>
</template>

<script>
export default {
  props: ["headline", "subtitle", "text", "img"],
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 800);
  }
}
</script>

<style>

</style>