<template>
  <div id="hero" class="uk-position-relative">
    <div class="uk-grid uk-grid-collapse uk-grid-match" uk-grid>
      <div class="uk-width-auto@m" style="width: 45%;">
        <div class="uk-height-1-1 uk-flex uk-flex-middle">
          <div id="hero-content" class="uk-padding-large">
            <h3 class="uk-h1 uk-margin-small uk-animation-slide-left-small">
              {{ subtitle }}
            </h3>   
            <h1 class="uk-heading-medium uk-text-bold uk-margin-remove-top uk-animation-slide-left-small">
              {{ headline }}
            </h1>
            <p class="uk-animation-slide-bottom-small uk-width-4-5@m">
              {{ text }}
            </p>
          </div>   
        </div>
      </div>
      <div class="uk-width-auto@m" style="width: 55%">
        <div class="reveal-anim reveal-anim-long uk-position-relative uk-overflow-hidden">
          <img class="uk-cover" :src='`${image}`' uk-cover style="width:100%; height: 100%; object-fit: cover;" />
        </div>
      </div>
    </div>
    <HeroBar />
  </div>
</template>

<script>
export default {
  props: ["headline", "subtitle", "text", "img"],
  computed: {
    image() {
      try {
        const img = require(`../assets/images/${this.img}`); 
        return img 
      } catch (error) {
        return false
      }
    }
  }
}
</script>

<style>

</style>