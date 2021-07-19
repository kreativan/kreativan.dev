<template>
  <div id="main">

    <PageHeading 
      :title="page.title" 
      :subtitle="page.subtitle" 
      container="medium"
    />

    <div class="container-medium">
      <p class="text-intro">{{ page.intro }}</p>  
      <nuxt-content id="hire-me-list" :document="page" />
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Hire Me - Web Developer for Hire",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.intro
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Hire Me - Web Developer for Hire",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.intro
        }
      ],
    }
  },
  data() {
    return {
      page: {}
    }
  },
  async fetch() {
    const page = await this.$content('hire-me').fetch()
    this.page = page
  },
}
</script>

<style>
#hire-me-list ul {
  padding-left: 30px;
  list-style-type: circle;
}
#hire-me-list li {
  padding: 7px 0;
  line-height:1.3;
}
</style>