<template>
  <div class="services-grid">
    <template v-for="(value, key) in services">
      <div :key="key">
        <h3 class="font-base">{{ key }}</h3>
        <p>{{ value }}</p>
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
.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: var(--gutter);
  grid-row-gap: var(--gutter);
}

.svg {
  display:inline-block;
  position:relative;
  top:8px;
  overflow:hidden;
}
.svg {
  width:28px !important;
  height:28px !important;
}

@media(max-width: 960px) {
  .services-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media(max-width: 580px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>