<template>
  <div
    class="uk-grid uk-grid-collapse uk-grid-match uk-background-muted"
    uk-grid
  >
    <div class="uk-width-1-2@m">
      <div
        class="uk-panel uk-overflow-hidden tm-scrollspy"
        uk-scrollspy="cls: reveal-anim, reveal-anim-muted; delay: 500;"
      >
        <nuxt-picture
          :src="`${image}`"
          format="webp"
          class="tm-object-fit uk-display-block"
          sizes="xs:380px sm:600px"
          :alt="title"
        />
      </div>
    </div>
    <div class="uk-width-expand@m">
      <div
        class="uk-panel uk-padding uk-background-muted uk-flex uk-flex-middle"
      >
        <div
          class="tm-scrollspy uk-padding-small"
          uk-scrollspy="cls: uk-animation-fade; delay: 300;"
        >
          <span class="uk-text-uppercase uk-text-small">
            {{ label }}
          </span>
          <h2 class="uk-margin-remove-top">{{ title }}</h2>
          <p>{{ text }}</p>
          <a
            v-if="link"
            :href="link"
            target="_blank"
            rel="nofollow noopener noreferrer"
            :title="title"
            class="tm-button-icon"
          >
            Preview
            <span>
              <i uk-icon="link"></i>
              <i uk-icon="arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'label', 'text', 'image', 'href', 'link']
}
</script>

<style></style>
