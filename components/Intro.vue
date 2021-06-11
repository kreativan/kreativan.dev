<template>
  <div>
    <h3 class="uk-h5 uk-text-uppercase tm-font-base uk-margin-small">{{ title }}</h3>
    <h2 class="uk-h3 tm-line-height uk-margin-remove">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  props: ["title", "text"]
}
</script>

<style>

</style>