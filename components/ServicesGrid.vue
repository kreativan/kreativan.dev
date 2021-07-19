<template>
  <div class="services-grid">
    <template v-for="item in services">
      <div :key="item.slug">
        <h3 v-if="item.read_more" class="font-base">
          <nuxt-link :to="item.slug" :title="item.title">
            {{ item.title }}
          </nuxt-link>
        </h3>
        <h3 v-else class="font-base">{{ item.title }}</h3>
        <p>
          {{ item.summary }}
          <template v-if="item.read_more">
            <nuxt-link :to="item.path" :title="item.title">
              More
              <span class="svg" v-html="require(`../assets/svg/arrow-right.svg?raw`)"></span>
            </nuxt-link>
          </template>
        </p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: []
    }
  },
  async fetch() {
    const services = await this.$content('services')
    .where({ feed: true })
    .sortBy('createdAt')
    .fetch()
    this.services = services
  }
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