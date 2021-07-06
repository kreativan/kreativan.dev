<template>
  <div id="main">

    <PageHeading
      :title="page.title"
      :caption="page.caption"
      :image="page.image"
    />

    <div class="uk-container uk-margin-medium">
      
      <p
        v-html="page.intro" 
        class="uk-width-4-5@l uk-h3 tm-font-deco">
      </p>
      
      <nuxt-content :document="page"  />

    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.page.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.seo.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.seo.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.seo.description
        }
      ],
    }
  },
  async asyncData({ $content, params, error }) {
    const page = await $content('hire-me').fetch()
    return { page }
  }
}
</script>

<style>

</style>