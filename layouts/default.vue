<template>
  <div id="layout-default">
    <Header cls="header-default" />
    <Nuxt />
    <Footer />
    <Menu />
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
  watch: {
    $route () {
      const element = document.querySelector("#offcanvas-menu");
      this.$uikit.offcanvas(element).hide()
      const navEl = document.querySelectorAll("#offcanvas-menu .uk-nav li.uk-parent.uk-open");
      if(navEl && navEl.length > 0) {
        setTimeout(() => {
          navEl.forEach(function(e) { 
            e.classList.remove("uk-open")
            let subnav = e.querySelector(".uk-nav-sub")
            if(subnav) subnav.setAttribute("hidden", "")
          })
        }, 300);
      }
    }
  },
}
</script>

<style>

</style>
