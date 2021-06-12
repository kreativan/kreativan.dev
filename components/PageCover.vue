<template>
  <div id="page-cover" class="uk-position-relative uk-overflow-hidden uk-light" :class="{'is-loaded': isLoaded}">
    <div class="reveal-anim">
      <img
        class="uk-position-cover tm-object-fit"
        :src='`${image}`'
      />
    </div>
    <div class="page-cover-content uk-position-bottom uk-position-small">
      <h1 class="uk-heading-large" :class="{'uk-animation-slide-left-medium': isLoaded}">
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