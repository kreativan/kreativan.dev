<template>
  <ul class="uk-list uk-list-divider">
    <li>
      <span class="tm-svg" v-html="require(`../assets/svg/map-marker.svg?raw`)"></span>
      Location: <b>Sofila, Bulgaria</b>
    </li>
    <li>
      <span class="tm-svg" v-html="require(`../assets/svg/plane.svg?raw`)"></span>
      Email:
      <a href="mailto: kreativan.dev@gmail.com" class="uk-link-reset">
        <b>kreativan.dev@gmail.com</b>
      </a>
    </li>
    <li>
      <span class="tm-svg" v-html="require(`../assets/svg/github.svg?raw`)"></span>
      GitHub:
      <a
        href="https://github.com/kreativan"
        target="_blank"
        rel="nofollow, noopener"
        class="uk-link-reset"
        title="Ivan Milincic GitHub"
      >
        <b>github.com/kreativan</b>
      </a>
    </li>
    <li>
      <span class="tm-svg" v-html="require(`../assets/svg/linkedin.svg?raw`)"></span>
      LinkedIn:
      <a
        href="https://www.linkedin.com/in/kreativan-dev/"
        class="uk-link-reset"
        target="_blank"
        rel="nofollow, noopener"
        title="Ivan Milincic LinkedIn"
      >
        <b>linkedin.com/in/kreativan-dev/</b>
      </a>
    </li>
    <li>
      <span class="tm-svg" v-html="require(`../assets/svg/twitter.svg?raw`)"></span>
      Twitter:
      <a href="https://twitter.com/lokomotivan"
        class="uk-link-reset"
        target="_blank"
        rel="nofollow, noopener"
        title="Ivan Milincic Twitter"
      >
        <b>twitter.com/lokomotivan</b>
      </a>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style>
</style>