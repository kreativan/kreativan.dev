<template>
  <div class="social-links">
    <a
      href="https://www.linkedin.com/in/kreativan-dev/"
      target="_blank"
      rel="nofollow, noopener"
      title="Ivan Milincic LinkedIn"
    >
      <span
        v-html="require(`../assets/svg/linkedin.svg?raw`)"
      ></span>
    </a>
    <a
      href="https://twitter.com/lokomotivan"
      target="_blank"
      rel="nofollow, noopener"
      title="Ivan Milincic Twitter"
    >
      <span
        v-html="require(`../assets/svg/twitter.svg?raw`)"
      ></span>
    </a>
    <a
      href="https://github.com/kreativan"
      target="_blank"
      rel="nofollow, noopener"
      title="Ivan Milincic GitHub"
    >
      <span v-html="require(`../assets/svg/github.svg?raw`)"></span>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.social-links a + a {
  display:inline-block;
  margin-left: 10px;
}
</style>