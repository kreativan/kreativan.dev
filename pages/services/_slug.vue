<template>
  <div id="main">

    <PageHeading 
      :title="page.title"
      :subtitle="page.subtitle"
      :image="page.image"
    />

    <div class="container-medium margin-medium">
      <p class="text-intro">{{ page.intro }}</p>
      <nuxt-content :document="page" />
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.page.title + " | Web development services",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.intro
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.intro
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.intro
        }
      ],
    }
  },
  async asyncData({ $content, params, error }) {
    const page = await $content(`services`, params.slug).fetch()
    const blocks = page.blocks
    return { page, blocks }
  },
}
</script>

<style>

</style>