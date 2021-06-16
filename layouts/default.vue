<template>
  <div>
    <Menu />
    <Header cls="header-default" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  watch: {
    $route () {
      const element = document.querySelector("#offcanvas-menu");
      this.$uikit.offcanvas(element).hide()
      const navEl = document.querySelectorAll("#offcanvas-menu .uk-nav");
      this.$uikit.nav(navEl).toggle(0, true);
    }
  },
}
</script>

<style>

</style>
