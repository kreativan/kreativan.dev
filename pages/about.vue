<template>
  <div id="main">

    <PageHeading
      :title="page.title"
      :caption="page.caption"
      :image="page.image"
    />

    
    <div class="uk-container uk-section">
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

      <div
        class="uk-grid uk-grid-large"
        uk-grid
        uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 300"
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
  data() {
    return {
      page: {},
    }
  },
  async fetch() {
    const page = await this.$content('about').fetch()
    this.page = page
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
