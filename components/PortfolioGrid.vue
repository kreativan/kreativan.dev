<template>
  <div class="portfolio-grid" :class="cls">
    <template v-for="item in items">
      <div :key="item.slug">
        <PortfolioCard 
          :image="item.image"
          :title="item.title"
          :link="item.link"
          width="380"
          height="240"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props:["items", "cls"]
}
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: var(--gutter);
  grid-row-gap: var(--gutter);
}
@media(max-width: 960px) {
  .portfolio-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media(max-width: 640px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>