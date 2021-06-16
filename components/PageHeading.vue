<template>
  <div id="page-heading" class="uk-margin-medium-top" :class="cls">

    <div class="page-headline uk-container uk-margin-medium-bottom" uk-scrollspy="cls: is-loaded; delay: 300">
      <h1 class="uk-heading-small tm-font-deco uk-margin-remove"
        uk-scrollspy="cls: uk-animation-slide-left-medium; delay: 300">
        {{ title }}
      </h1>
      <p class="uk-margin-remove">{{ caption }}</p>
    </div>

    <template v-if="image">
      <div class="page-image uk-container">
        <div class="uk-position-relative uk-overflow-hidden"
          uk-scrollspy="cls: reveal-anim; delay: 500"
        >
          <nuxt-picture
            :src="`${image}`"
            ormat="webp"
            width="1200"
            height="380"
            class="uk-display-block"
            sizes="xs:380px sm:640px lg:1024px xl:1200px"
          />
        </div>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  props: ["title", "caption", "image", "cls"]
}
</script>

<style>

</style>