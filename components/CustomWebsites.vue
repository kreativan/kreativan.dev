<template>
  <div class="split-section" v-view.once>
    <div class="ss-media image-animation">
      <nuxt-picture src="/custom-websites.jpg" format="webp" width="640" height="480" />
    </div>
    <div class="ss-content">
      <h2>{{ title }}</h2>
      <p v-html="text"></p>
      <ul class="basic-list">
        <li v-for="(item, index) in list" :key="index">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:["title", "text", "link", "link_text", "list"],
  computed: {
    linkText() {
      return this.link_text ? this.link_text : "Read More"
    }
  }
}
</script>