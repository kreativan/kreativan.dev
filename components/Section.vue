<template>
  <div class="uk-grid" uk-grid>
    <div class="uk-width-medium@m">
      <h3 class="uk-h5 tm-font-base uk-text-uppercase uk-text-muted uk-margin-remove">
        {{ subtitle }}
      </h3>
    </div>
    <div class="uk-width-expand@m">
      <h2 class="uk-h1 uk-margin-remove">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"]
}
</script>

<style>

</style>