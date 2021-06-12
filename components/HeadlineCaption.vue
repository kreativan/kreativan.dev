<template>
  <div class="headline-caption is-loaded">
    <h1 class="uk-heading-small">{{ title }}</h1>
    <p>{{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "caption"]
}
</script>

<style>
</style>