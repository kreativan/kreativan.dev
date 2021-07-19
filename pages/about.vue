<template>
  <div id="main">

    <PageHeading 
      :image="page.image" 
      :title="page.title" 
      :subtitle="page.subtitle" 
    />

    <div class="container margin-medium">
      <template v-for="(item, key) in textBlocks">
        <div :key="key" class="text-block">
          <h4>{{ key }}</h4>
          <div>
            <h2>{{ item.title }}</h2>
            <p v-html="item.text"></p>
          </div>
        </div>
      </template>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About Me | Ivan Milincic Web Developer",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Serbian web developer working and living in lovely Bulgaria. Providinf outsorcing and freelance web development services."
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "About Me | Ivan Milincic Web Developer"
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Serbian web developer working and living in lovely Bulgaria. Providinf outsorcing and freelance web development services."
        }
      ],
    }
  },
  data() {
    return {
      page: {},
      textBlocks: {}
    }
  },
  async fetch() {
    const page = await this.$content('about').fetch()
    this.page = page
    this.textBlocks = page.blocks
  },
}
</script>

<style>

</style>