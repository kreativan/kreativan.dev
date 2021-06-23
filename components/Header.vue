<template>
<div>
  <div id="header"
    class="uk-flex uk-flex-middle uk-flex-between" 
    :class="cls"
    uk-sticky="top: 300; animation: uk-animation-slide-top"
  >

    <div class="logo tm-font uk-h3 uk-margin-remove uk-text-bold">
      I.M
    </div>
    <div class="menu">
      <a href="#offcanvas-menu"
        uk-toggle
        class="uk-flex uk-flex-middle uk-link-reset" 
      >
        <div class="burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </div>

  </div>
 </div>
</template>

<script>
export default {
  props: ["cls"]
}
</script>

<style>

</style>