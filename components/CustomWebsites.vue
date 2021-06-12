<template>
  <div class="custom-websites uk-container">

    <div class="uk-margin-large-bottom uk-width-3-5 uk-margin-auto uk-text-center" style="padding-bottom: 50px;">
      <h2 class="uk-h5 uk-text-uppercase tm-font-base uk-margin-small">{{ intro.title }}</h2>
      <h3 class="uk-h3 uk-margin-remove">{{ intro.text }}</h3>
    </div>

    <div class="uk-position-relative uk-height-1-1">

      <div class="custom-websites-media uk-position-top-right uk-height-1-1 uk-overflow-hidden" uk-scrollspy="cls: reveal-anim;delay: 200">
        <img class="tm-object-fit" src="~assets/images/hero.png" />
      </div>

      <div class="custom-websites-panel uk-panel uk-padding uk-background-muted uk-width-2-5@m">
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
  props: ["section", "intro"]
}
</script>

<style lang="less">
.custom-websites {
  
  min-height: 400px;

  .custom-websites-media {
    min-height: 400px;
    width:90%;
    opacity:0;
    &.uk-scrollspy-inview {
      opacity:1;
    }

    img {
      position: relative;
      z-index:1;
    }

  }

  .custom-websites-panel {
    position:relative;
    top: -50px;
    z-index:109;
  }

}
</style>