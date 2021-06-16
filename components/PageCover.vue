<template>
  <div id="page-cover" class="uk-position-relative uk-overflow-hidden uk-light" :class="{'is-loaded': isLoaded}">
    <div class="reveal-anim tm-object-fit">
      <nuxt-picture 
        :src='`${img}`' 
        format="webp"
        class="tm-object-fit uk-display-block uk-width-1-1 uk-height-1-1"
        sizes="xs:380px sm:640px lg:1024px xl:1920px"
      />
    </div>
    <div class="page-cover-content uk-position-bottom uk-position-small">
      <h1 class="uk-heading-large tm-font-deco uk-margin-remove" :class="{'uk-animation-slide-left-medium': isLoaded}">
        {{ title }}
      </h1>
      <div class="page-cover-caption uk-position-relative">
        {{ caption }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["title", "caption", "img"],
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 800);
  },
}
</script>

<style>

</style>