<template>
  <div id="main">
    
    <PageHeading
      :title="page.title"
      :caption="page.caption"
      :image="page.image"
    />

    <div class="uk-container uk-margin-large">

      <FeaturedProject
        :title="featured.title"
        :text="featured.intro"
        :image="featured.image"  
      />

      <template v-for="item in portfolio">
        <h2 :key="item.slug">{{ item.title }}</h2>
      </template>

      <nuxt-content :document="page" />

    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {

    const getPage = await $content('portfolio-page').fetch()

    const featured = await $content(`projects`)
    .where({ featured: true })
    .sortBy("createdAt", 'desc')
    .limit(1)
    .fetch()
    .catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    })

    const portfolioAll = await $content(`portfolio`)
    .sortBy("createdAt", 'desc')
    .fetch()
    .catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    })

    return { 
      page: getPage,
      portfolio: portfolioAll,
      featured: featured[0] 
    }
  },
}
</script>

<style>

</style>