<template>
  <div class="social-links">
    <a
      href="https://www.linkedin.com/in/kreativan-dev/"
      class="uk-link-reset"
      target="_blank"
      rel="nofollow, noopener"
      title="Ivan Milincic LinkedIn"
    >
      <span
        class="tm-svg"
        v-html="require(`../assets/svg/linkedin.svg?raw`)"
      ></span>
    </a>
    <a
      href="https://twitter.com/lokomotivan"
      class="uk-link-reset"
      target="_blank"
      rel="nofollow, noopener"
      title="Ivan Milincic Twitter"
    >
      <span
        class="tm-svg"
        v-html="require(`../assets/svg/twitter.svg?raw`)"
      ></span>
    </a>
    <a
      href="https://github.com/kreativan"
      target="_blank"
      rel="nofollow, noopener"
      class="uk-link-reset"
      title="Ivan Milincic GitHub"
    >
      <span
        class="tm-svg"
        v-html="require(`../assets/svg/github.svg?raw`)"
      ></span>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.social-links > a {
  margin-right: 10px;
}
</style>
