<template>
  <div id="main">

    <PageHeading
      :title="page.title"
      :caption="page.caption"
      :image="page.image"
    />

    
    <div class="uk-container uk-section" uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-medium; delay: 400">
      <template v-for="(item, key) in page.blocks">
        <div :key="key" class="uk-margin-medium">
          <TextBlock
            :label="key"
            :title="item.title"
            :text="item.text"
          />
        </div>
      </template>

      <div
        class="uk-grid uk-grid-large"
        uk-grid
        uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 500"
      >
        <div class="uk-width-1-3@m">
          <h5 class="uk-text-uppercase uk-text-muted uk-margin-small-bottom">
            Contact
          </h5>
        </div>
        <div class="uk-width-expand@m">
          <h2 class="uk-h3 uk-text-bold">Let's get in touch</h2>
          <ContactInfo />
        </div>
      </div>

      <nuxt-content :document="page" />

    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seo.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.seo.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.seo.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.seo.image
        }
      ],
    }
  },
  data() {
    return {
      page: {},
      seo: {}
    }
  },
  async fetch() {
    const page = await this.$content('about').fetch()
    this.page = page
    this.seo = page.seo
  },
}
</script>

<style scoped>
h5 {
  font-size: 0.9rem;
  letter-spacing: 1px;
}
.uk-grid h2 {
  margin-top: -10px !important;
}
</style>
