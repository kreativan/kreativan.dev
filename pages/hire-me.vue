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
        class="uk-width-4-5@l uk-h3 tm-font-deco tm-scrollspy"
        uk-scrollspy="cls: uk-animation-fade; delay: 400">
      </p>

      <nuxt-content :document="page" />

    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content('hire-me').fetch()
    return { page }
  }
}
</script>

<style>

</style>