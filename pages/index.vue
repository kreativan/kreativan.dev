<template>
  <div>

    <Hero 
      :headline='hero.title'
      :subtitle='hero.subtitle' 
      :text='hero.text'
      :img='hero.image'
    />

    <div id="first" class="uk-section uk-section-large uk-section-muted">
      <div class="uk-width-2-5@m uk-margin-auto uk-text-center">
        <h2 class="uk-h5 uk-text-uppercase uk-margin-small"
          uk-scrollspy="cls: uk-animation-slide-bottom-medium;delay: 300"
        >
          {{ intro.title }}
        </h2>
        <p class="uk-h3 uk-margin-remove tm-font-deco"
          uk-scrollspy="cls: uk-animation-slide-bottom-medium;delay: 600"
          v-html="intro.text"
        >
        </p>
      </div>
    </div>

    <div>
      <CustomWebsites :section='custom_websites' />
    </div>
    
    <div class="uk-section uk-section-large tm-bg-dark uk-light uk-position-relative">
      <div class="uk-container uk-position-relative">
        <ServicesGrid :services="services" />
      </div>
    </div>

    <div class="uk-section uk-section-large">
      <div class="uk-container uk-container-xsmall uk-text-center">

        <h2 class="uk-h4 uk-text-uppercase tm-font-base uk-margin-small"
          uk-scrollspy="cls: uk-animatio-fade;delay: 300"
        >
          {{ contact.title }}
        </h2>

        <p class="uk-h3 tm-font-deco uk-margin-remove" v-html='contact.text'
        uk-scrollspy="cls: uk-animation-fade; delay: 300"></p>
        
        <div class="uk-margin" uk-scrollspy="cls: uk-animation-scale-up; delay: 300">
          <SocialLinks />
        </div>

        <a :href="`mailto: ${contact.email}`"
          class="uk-inline uk-h3 uk-margin-remove uk-link-reset tm-font uk-text-bold"
          uk-scrollspy="cls: uk-animation-slide-bottom-medium;delay: 600"
        >
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

<style> 
#home .social-links > a {
  display: inline-block;
  transform: scale(1);
  transition: all .3s;
}
#home .social-links svg {
  width:38px !important;
  height: 38px !important;
}
#home .social-links > a:hover {
  transform: scale(1.15);
}
</style>
