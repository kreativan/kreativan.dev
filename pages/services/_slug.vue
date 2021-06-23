<template>
  <div id="main">

    <PageHeading 
      :title="page.title"
      :caption="page.subtitle"
      :image="page.image"
    />

    <div class="uk-section">
      <div class="uk-container" 
      :class="page.container ? `uk-container-${page.container}` : ''">

        <p 
          v-if="page.intro" 
          class="uk-h4 tm-font-deco uk-width-auto" 
          v-html="page.intro"
        >
        </p>

        <template v-for="(item, key) in page.blocks">
          <div :key="key" class="uk-margin-medium">
            <TextBlock
              :label="key"
              :text="item"
              animation="true"
            />
          </div>
        </template>

        <nuxt-content :document="page" />

      </div>
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content(`services`, params.slug).fetch()
    const blocks = page.blocks
    return { page, blocks }
  },
}
</script>

<style>

</style>