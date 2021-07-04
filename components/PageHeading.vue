<template>
  <div id="page-heading" class="uk-margin-medium-top" :class="cls">

    <div class="page-headline uk-container uk-margin-medium-bottom">
      <h1 class="uk-heading-small tm-font-deco uk-margin-remove">
        {{ title }}
      </h1>
      <p class="uk-margin-remove">{{ caption }}</p>
    </div>

    <template v-if="image">
      <div class="page-image uk-container">
        <div class="uk-position-relative uk-overflow-hidden"
          uk-scrollspy="cls: reveal-anim; delay: 350"
        >
          <nuxt-picture
            :src="`${image}`"
            format="webp"
            height="400px"
            class="uk-display-block"
            sizes="xs:380px sm:640px lg:1024px xl:1200px"
            :alt="title"
          />
        </div>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  props: ["title", "caption", "image", "cls"],
  mounted() {
    setTimeout(() => {
      document.querySelector("#page-heading").classList.add("is-loaded");
    }, 300);
  }
}
</script>

<style>

</style>