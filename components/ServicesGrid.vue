<template>
  <div class="uk-grid uk-grid-large uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid
    uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-medium; delay: 200"
  >
    <template  v-for="(item, index) in services">
      <div :key="index" :class="{ 'uk-grid-margin': index > 2 }">
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["services"]
}
</script>

<style scoped>
h3 {
  font-size: 1.5rem;
}
</style>