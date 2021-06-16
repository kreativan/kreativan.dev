<template>
  <div class="uk-grid uk-grid-collapse uk-grid-match" uk-grid>
    <div class="uk-width-expand@m">
      <div class="uk-panel uk-overflow-hidden"
        uk-scrollspy="cls: reveal-anim; delay: 500;">
        <nuxt-picture 
            :src='`${image}`' 
            format="webp"
            class=" uk-position-cover tm-object-fit uk-display-block"
          />
      </div>
    </div>  
    <div class="uk-width-expand@m">
      <div class="uk-panel uk-padding uk-background-muted tm-scrollspy"
        uk-scrollspy="cls: uk-animation-slide-right-medium; delay: 1000;">
        <span class="uk-text-uppercase uk-text-small">Featured</span>
        <h2 class="uk-margin-remove-top">{{ title }}</h2>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "image"]
}
</script>

<style>

</style>