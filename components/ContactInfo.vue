<template>
  <ul class="uk-list uk-list-divider">
    <li>
      <span class="tm-svg" v-html="require(`../assets/svg/map-marker.svg?raw`)"></span>
      Sofila, Bulgaria
    </li>
    <li>
      <span class="tm-svg" v-html="require(`../assets/svg/plane.svg?raw`)"></span>
      <a href="mailto: kreativan.dev@gmail.com" class="uk-link-reset">
        kreativan.dev@gmail.com
      </a>
    </li>
    <li>
      <span class="tm-svg" v-html="require(`../assets/svg/github.svg?raw`)"></span>
      <a
        href="https://github.com/kreativan"
        target="_blank"
        rel="nofollow, noopener"
        class="uk-link-reset"
        title="Ivan Milincic GitHub"
      >
        github.com/kreativan
      </a>
    </li>
    <li>
      <span class="tm-svg" v-html="require(`../assets/svg/linkedin.svg?raw`)"></span>
      <a
        href="https://www.linkedin.com/in/kreativan-dev/"
        class="uk-link-reset"
        target="_blank"
        rel="nofollow, noopener"
        title="Ivan Milincic LinkedIn"
      >
        linkedin.com/in/kreativan-dev/
      </a>
    </li>
    <li>
      <span class="tm-svg" v-html="require(`../assets/svg/twitter.svg?raw`)"></span>
      <a href="https://twitter.com/lokomotivan"
        class="uk-link-reset"
        target="_blank"
        rel="nofollow, noopener"
        title="Ivan Milincic Twitter"
      >
        twitter.com/lokomotivan
      </a>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style>
</style>