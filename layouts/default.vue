<template>
  <div id="layout-home">
    <Header @toggle-menu="toggleMenu" />
    <Nuxt />
    <Footer />
    <Menu :isOpen="isMenuOpen" @toggle-menu="toggleMenu" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'og:type',
          property: 'og:type',
          content: "website"
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://kreativan.dev" + this.$route.path
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: "summary"
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical', 
          href: "https://kreativan.dev" + this.$route.path
        }
      ]
    }
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  watch: {
    $route() {
      const body = document.querySelector("body");
      body.classList.remove("noscroll");
      this.isMenuOpen = false;
    },
  },
  methods: {
    toggleMenu() {
      const body = document.querySelector("body");
      if(this.isMenuOpen === true) {
        this.isMenuOpen = false;
        body.classList.remove("noscroll");
      } else {
        body.classList.add("noscroll");
        this.isMenuOpen = true;
      }
    }
  }
}
</script>