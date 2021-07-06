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
              :title="item.title"
              :text="item.text"
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
  head() {
    return {
      title: this.page.title  + " | " + this.page.subtitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.intro
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.page.image
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