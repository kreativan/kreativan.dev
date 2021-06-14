<template>
  <div class="uk-grid uk-grid-collapse uk-grid-match" uk-grid>
    <div class="uk-width-expand@m">
      <div class="uk-panel">
        <div class="uk-position-cover uk-overflow-hidden" 
          uk-scrollspy="cls: reveal-anim;delay: 500">
        <img class="tm-object-fit" src="~assets/images/hero.png" />
      </div>
      </div>
    </div>
    <div class="uk-width-2-5@m">
      <div class="uk-panel uk-padding uk-background-muted"
        uk-scrollspy="cls: uk-animation-slide-right-medium;delay: 500">
        <h3 class="uk-h5 tm-font-base uk-text-uppercase uk-margin-remove">
          {{ section.subtitle }}
        </h3>
        <h2 class="uk-text-bold uk-margin-remove-top">
          {{ section.title }}
        </h2>
        <p v-html='section.text'></p>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  props: ["section"]
}
</script>

<style>

</style>