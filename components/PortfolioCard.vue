<template>
  <div class="portfolio-card">
    <nuxt-img 
      :src='`${image}`' 
      format="webp"
      width="380"
      height="250"
      :alt="title"
    />
    <div class="uk-flex uk-flex-between uk-flex-middle uk-margin-small-top uk-padding-small uk-padding-remove-vertical">
      <div style="line-height:0;">
        <h3 class="uk-h4 uk-margin-remove">{{ title }}</h3>
        <span v-if="link" class="uk-text-small uk-text-muted">{{ linkText }}</span>
      </div>
      <a v-if="link" 
        :href="link" 
        class="uk-icon-button" 
        uk-icon="arrow-right" 
        target="_blank" 
        rel="nofollow noopener noreferrer"
        :title="link">
        <i uk-icon="link"></i>  
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "link"],
  computed: {
    linkText() {
      let clamp = '...';
      let length = "32";
      return this.link.length > length ? this.link.slice(0, length) + clamp : this.link;
    }
  }
}
</script>

<style>

</style>