<template>
  <div>

    <Hero :hero="hero" />

    <div class="section-intro section bg-muted text-center">
      <div class="container-small">
        <h2>{{ intro.title }}</h2>
        <p class="text-large" v-html="intro.text"></p>
      </div>
    </div>

    <SplitSection />

    <div class="section bg-black">
      <div class="container">
        <ServicesGrid />
      </div>
    </div>

    <div class="section-contact section text-center">
      <div class="container-small">
        <h2>{{ contact.title }}</h2>
        <p class="text-large" v-html="contact.text"></p>
        <div class="margin">
          <SocialLinks />
        </div>
        <a class="text-bold font-heading" :href="mailTo">{{ contact.email }}</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Ivan Milincic | Processwire Web Developer | Web Developer",
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
          content: "https://kreativan.dev/hero.png"
        }
      ],
    }
  },
  data() {
    return {
      seo: {
        title: "Ivan Milincic | Processwire Web Developer | Web Developer",
        description: "Web developer based in Bulgaria. With a preference for front-end development and ProcessWire CMS. I provide freelance and outsourcing services."
      },
      hero: {},
      intro: {},
      contact: {}
    }
  },
  async fetch() {
    const page = await this.$content('home').fetch()
    this.hero = page.hero
    this.intro = page.intro
    this.contact = page.contact
  },
  computed: {
    mailTo() {
      return `mailto: ${this.contact.email}`;
    }
  }
}
</script>

<style scoped>
.section-contact a {
  font-size: 1.2rem;
}

@media(min-width: 960px) {
  .section-contact a {
    font-size: 1.5rem;
  }
}
</style>