<template>
<div uk-slider="clsActivated: uk-transition-active; center: true; autoplay: false;autoplay-interval: 5000; velocity: 4">

  <div class="uk-position-relative">

    <div class="uk-slider-container uk-light">
      <ul class="uk-slider-items uk-grid uk-grid-small">
        <template v-for="item in items">
          <li class="uk-width-3-4" :key="item.slug">
            <div class="uk-panel">
              <nuxt-picture 
                :src='`${item.image}`' 
                format="webp"
                sizes="xs:280px sm:430px lg:680px xl:1200px"
                class="uk-display-block uk-width-1-1"
                :alt="item.title"
              />
              <div class="uk-padding-small uk-overlay-primary uk-position-bottom uk-text-center uk-transition-fade uk-flex uk-flex-between uk-flex-middle">
                <h3 class="uk-h5 uk-margin-remove">
                  {{ item.title }}
                </h3>
                <a v-if="item.link" 
                  :href="item.link" 
                  target="_blank" 
                  rel="nofollow noopener" 
                  class="uk-icon-button" 
                  uk-icon="arrow-right"
                  :title="item.title"
                >
                  <i uk-icon="link"></i>
                </a>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>

    <a class="uk-position-center-left-out uk-position-medium uk-visible@xl" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right-out uk-position-medium uk-visible@xl" href="#" uk-slidenav-next uk-slider-item="next"></a>

  </div>

</div>
</template>

<script>
export default {
  props: ["items"]
}
</script>

<style lang="less" scoped>
.uk-panel {
  opacity:0.5 !important;
  transform: scale(0.92);
  filter: grayscale(30%);
  transition: all .3s;
}
li.uk-transition-active .uk-panel{
  opacity:1 !important;
  transform: scale(1);
  filter: grayscale(0%);
}
</style>