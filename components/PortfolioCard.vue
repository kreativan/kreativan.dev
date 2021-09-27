<template>
  <div class="portfolio-card">
    <div class="portfolio-card-image bg-muted">
      <nuxt-picture :src="image" :width="width" :height="height" :alt="title" />
    </div>
    <div class="portfolio-card-body">
      <div>
        <h3 class="font-base">{{ title }}</h3>
        <span class="color-muted text-small">{{ linkText }}</span>
      </div>
      <a
        :href="link"
        class="btn btn-icon"
        rel="noffolow noopener"
        target="_blank"
        :title="title"
      >
        <span>
          <i v-html="require(`../assets/svg/link.svg?raw`)"></i>
          <i v-html="require(`../assets/svg/arrow-right.svg?raw`)"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "link", "width", "height"],
  computed: {
    linkText() {
      let clamp = '...';
      let length = "24";
      return this.link.length > length ? this.link.slice(0, length) + clamp : this.link;
    }
  }
};
</script>

<style scoped>
.portfolio-card-image img {
  width: 100%;
}

.portfolio-card-body {
  padding:15px;
  display: flex;
  justify-content: space-between;
}

.portfolio-card-body .btn-icon span {
  width: 38px;
  height: 38px;
}

.portfolio-card h3 {
  font-size: 1.3rem;
  margin: 0;
}

.portfolio-card h3 + span {
  display: block;
  margin-top: 5px;
}
</style>
