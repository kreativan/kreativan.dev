<template>
  <div class="split-section">
    <div class="ss-media">
      <nuxt-img src="/custom-websites.jpg" format="webp" width="640" height="480" />
    </div>
    <div class="ss-content">
      <h2>{{ title }}</h2>
      <p v-html="text"></p>
      <nuxt-link :to="link" class="btn btn-icon">
        {{ linkText }}
        <span>
          <i v-html="require(`../assets/svg/chevron-right.svg?raw`)"></i>
          <i v-html="require(`../assets/svg/arrow-right.svg?raw`)"></i>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props:["title", "text", "link", "link_text"],
  computed: {
    linkText() {
      return this.link_text ? this.link_text : "Read More"
    }
  }
}
</script>