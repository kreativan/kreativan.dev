<template>
  <div id="home">

    <Hero 
      :headline='hero.title'
      :subtitle='hero.subtitle' 
      :text='hero.text'
      :img='hero.image'
    />

    <div id="first" class="uk-section uk-section-large">
      <CustomWebsites :intro="intro" :section='custom_websites' />
    </div>
    
    <div class="uk-section uk-section-large tm-bg-dark uk-light uk-position-relative">
      <div class="uk-container uk-position-relative">
        <ServicesGrid :services="services" />
      </div>
    </div>

    <div class="uk-section uk-section-large">
      <div class="uk-container uk-container-xsmall uk-text-center">
        <h2 class="uk-h5 uk-text-uppercase tm-font-base uk-margin-small">
          {{ contact.title }}
        </h2>
        <p class="uk-h3 uk-margin-remove" v-html='contact.text'></p>
        <div class="social-links uk-margin-top">
          <LinkedIn size="38" cls="uk-margin-small-right" />
          <GitHub size="38"  cls="uk-margin-small-right" />
          <Twitter size="38"  cls="uk-margin-small-right" />
        </div>
        <a :href="`mailto: ${contact.email}`"
          class="uk-inline uk-h3 uk-link-reset tm-font uk-margin uk-text-bold">
          {{ contact.email }}
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'homepage',
  head: {
    title: 'kreativan.dev',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Web developer'
      }
    ]
  },
  data() {
    return {
      hero: {},
      intro: {},
      custom_websites:{},
      services: [],
      contact: {}
    }
  },
  async fetch() {
    const page = await this.$content('home').fetch()
    this.hero = page.hero
    this.contact = page.contact
    this.intro = page.intro
    this.custom_websites = page.custom_websites
    this.services = page.services
  }
}
</script>

<style scoped>
.social-links > a {
  display: inline-block;
  transform: scale(1);
  transition: all .3s;
}
.social-links > a:hover {
  transform: scale(1.15);
}
</style>
