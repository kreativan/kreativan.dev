<template>
  <div>
    <Header cls="header-home header-absolute" />
    <Nuxt />
    <Footer />
    <Menu />
  </div>
</template>

<script>
export default {
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
