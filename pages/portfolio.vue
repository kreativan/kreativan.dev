<template>
  <div id="main">
    
    <PageHeading
      :title="page.title"
      :caption="page.caption"
      :image="page.image"
    />

    <div class="uk-container uk-margin-large">

      <PortfolioFeatured
        :title="featured.title"
        :label="featured.label"
        :text="featured.desc"
        :image="featured.image"  
        :link="featured.link ? featured.link : false"
      />

      <div class="uk-margin-large">
        <PortfolioSlider :items="slider" />
      </div>

    </div>

    <div class="uk-container uk-margin-large">
      <div class="uk-grid uk-child-width-1-3@m" uk-grid>
        <template v-for="item in cards">
          <div :key="item.slug">
            <PortfolioCard
              :image="item.image"
              :title="item.title"
              :link="item.link"
            />
          </div>
        </template>
      </div>
    </div>

    <div class="uk-container uk-margin-large">
      <table class="uk-table uk-table-divider">
        <thead>
          <tr>
            <th>Project</th>
            <th>Tech</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in cards">
          <tr :key="item.slug">
            <td>{{ item.title }}</td>
          </tr>
          </template>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {

    const portfolioPage = await $content('portfolio-page').fetch()

    const featured = await $content(`portfolio`)
    .where({ layout: 'featured' })
    .sortBy("createdAt", 'desc')
    .limit(1)
    .fetch()
    .catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    })
    
    const slider = await $content(`portfolio`)
    .where({ layout: 'slider'})
    .sortBy("createdAt", 'desc')
    .fetch()
    .catch((err) => {
      // error({ statusCode: 404, message: 'Page not found' })
      console.log(err)
    })

    const cards = await $content(`portfolio`)
    .where({ layout: 'card'})
    .sortBy("createdAt", 'asc')
    .fetch()
    .catch((err) => {
      // error({ statusCode: 404, message: 'Page not found' })
      console.log(err)
    })

    return { 
      page: portfolioPage,
      featured: featured[0],
      slider: slider,
      cards: cards
    }
  },
}
</script>

<style>

</style>