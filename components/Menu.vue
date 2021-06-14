<template>
  <div id="offcanvas-menu" uk-offcanvas="flip: true; overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column uk-overflow-hidden">

      <button class="uk-offcanvas-close uk-icon uk-close" type="button" uk-close="ratio: 1.4"></button>

      <ul class="uk-nav uk-nav-primary uk-margin-auto-vertical uk-nav-parent-icon" uk-nav>
        <template v-for="item in menu">
          <li :key='item.name' :class="{ 'uk-active': $route.name == item.name, 'uk-parent': item.submenu }">
            <template v-if="item.submenu">
              <a href="#">{{ item.title }}</a>
              <ul class="uk-nav-sub">
                <template v-for="item in item.submenu">
                  <li :class="{ 'uk-active': $route.name == item.name }" :key='item.name'>
                    <NuxtLink :to="item.href" :title="item.seo_title ? item.seo_title : item.title">
                      {{ item.title }}
                    </NuxtLink>
                  </li>
                </template>
              </ul>
            </template>
            <template v-else>
              <NuxtLink :to="item.href" :title="item.seo_title ? item.seo_title : item.title">
                {{ item.title }}
              </NuxtLink>
            </template>
          </li>
        </template>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
    }
  },
  async fetch() {
    const getMenu = await this.$content('menu').fetch()
    this.menu = getMenu.items;
  }
}
</script>

<style scoped>

</style>