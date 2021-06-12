<template>
  <div class="headline">
    <h3 class="uk-h5 tm-font-base uk-text-uppercase uk-margin-remove">
      {{subtitle }}
    </h3>
    <h2 class="uk-text-bold uk-margin-remove-top" :cls="cls">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "cls"]
}
</script>

<style></style>
