<template>
  <div id="main">

    <PageHeading 
      title="Portfolio" 
      subtitle="My personal projects, and work ive done for my clients" 
    />

    <div class="container margin-medium">
      <PortfolioFeatured :items="featured" />
      <PortfolioGrid :items="grid" cls="margin-medium" />
      <PortfolioList :items="list" cls="margin-medium" />
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Ivan Milincic Portfolio",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Ivan Milincic Portfolio. Processwire web development portfolio.  My personal projects, github projects and work ive done for my clients"
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Ivan Milincic Portfolio"
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Ivan Milincic Portfolio. Processwire web development portfolio.  My personal projects, github projects and work ive done for my clients"
        }
      ],
    }
  },
  data() {
    return {
      featured: {},
      grid: {},
      list: {}
    }
  },
  async fetch() {
    const featured = await this.$content('portfolio')
    .where({ layout: 'featured' })
    .sortBy('createdAt')
    .fetch() 
    this.featured = featured
    
    const grid = await this.$content('portfolio')
    .where({ layout: 'grid' })
    .sortBy('createdAt', 'desc')
    .fetch() 
    this.grid = grid

    const list = await this.$content('portfolio')
    .where({ layout: 'list' })
    .sortBy('createdAt', 'desc')
    .fetch() 
    this.list = list
  }
}
</script>

<style scoped>

</style>