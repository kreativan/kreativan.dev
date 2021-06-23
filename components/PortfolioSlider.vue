<template>
<div uk-slider="clsActivated: uk-transition-active; center: true; autoplay: true">

  <div class="uk-position-relative">

    <div class="uk-slider-container uk-light">
      <ul class="uk-slider-items uk-grid uk-grid-small">
        <template v-for="item in items">
          <li class="uk-width-3-4" :key="item.slug">
            <div class="uk-panel">
              <nuxt-picture 
                :src='`${item.image}`' 
                format="webp"
                sizes="xs:280px sm:430px lg:680px xl:900px"
                fit="inside"
                class="uk-width-1-1"
              />
              <div class="uk-padding-small uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom uk-flex uk-flex-between uk-flex-middle">
                <h3 class="uk-h5 uk-margin-remove">{{ item.title }}</h3>
                <span uk-icon="icon: arrow-right; ratio:1.6"></span>
              </div>
              <a v-if="item.link" :href="item.link" target="_blank" rel="nofollow noopener" class="uk-position-cover"></a>
            </div>
          </li>
        </template>
      </ul>
    </div>

    <a class="uk-position-center-left-out uk-position-small uk-visible@xl" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right-out uk-position-small uk-visible@xl" href="#" uk-slidenav-next uk-slider-item="next"></a>

  </div>

</div>
</template>

<script>
export default {
  props: ["items"]
}
</script>

<style>

</style>