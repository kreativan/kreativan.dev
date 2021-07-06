<template>
  <div class="uk-grid uk-grid-collapse uk-grid-match" uk-grid>
    <div class="uk-width-expand@m">
      <div class="uk-panel uk-overflow-hidden">
        <div class="uk-height-1-1" uk-scrollspy="cls: reveal-anim;delay: 500">
          <nuxt-picture
            :src="`${section.image}`"
            format="webp"
            class="
              uk-position-cover
              tm-object-fit
              uk-display-block uk-width-1-1 uk-height-1-1
            "
            sizes="xs:380px sm:640px xl:960"
            :alt="section.title"
          />
        </div>
      </div>
    </div>
    <div class="uk-width-1-2@m uk-width-expand@xl">
      <div
        class="uk-panel uk-padding-large uk-width-xlarge@xl"
        uk-scrollspy="cls: uk-animation-slide-right-medium;delay: 500"
      >
        <h3 class="uk-h5 tm-font-base uk-text-uppercase uk-margin-remove">
          {{ section.subtitle }}
        </h3>
        <h2 class="uk-margin-remove-top">
          {{ section.title }}
        </h2>
        <p v-html="section.text" class="uk-margin-medium-top"></p>
        <NuxtLink
          v-if="section.link"
          :to="section.link"
          :title="section.title"
          class="tm-button-icon"
        >
          Read More
          <span>
            <i uk-icon="chevron-right"></i>
            <i uk-icon="arrow-right"></i>
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section'],
}
</script>

<style scoped></style>
