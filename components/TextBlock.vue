<template>
  <div class="text-block uk-grid uk-grid-large" uk-grid>
    <div class="uk-width-1-3@m">
      <h5 class="uk-text-uppercase uk-text-muted uk-margin-small-bottom tm-scrollspy"
        :uk-scrollspy="animate ? `cls: uk-animation-slide-bottom-small; delay: 300` : ''">
        {{ label }}
      </h5>
    </div>
    <div class="uk-width-expand@m uk-margin-remove">
      <h2 v-if="title"
        class="uk-h3 uk-text-bold tm-scrollspy"
        :uk-scrollspy='animate ? `cls: uk-animation-slide-bottom-medium; delay: 300` : ``'>
        {{ title }}
      </h2>
      <p class="tm-scrollspy" v-html="text" 
        :uk-scrollspy="animate ? `cls: uk-animation-slide-bottom-medium; delay: 400` : ''">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "title", "text", "animation"],
  data() {
    return {
      animate: false,
    }
  },
  mounted() {
    if(this.animation === "true") {
      this.animate = true
    }
  }
}
</script>

<style scoped>
h5 {
  font-size: 0.9rem;
  letter-spacing: 1px;
}
@media(min-width: 1024px) {
  .uk-grid > div + div {
    margin-top:-5px !important;
  }
}
</style>