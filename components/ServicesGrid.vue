<template>
  <div class="uk-grid uk-grid-large uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid
    uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-medium; delay: 200"
  >
    <template  v-for="(item, index) in services">
      <div :key="index" :class="{ 'uk-grid-margin': index > 2 }">
        <div>
          <h3>
            <NuxtLink v-if="item.link" :to="item.link" :title="linkTitle(item.title)" class="uk-link-reset">
              {{ item.title }}
            </NuxtLink>
            <template v-else>
              {{ item.title }}
            </template>
          </h3>
          <p>{{ item.text }}
          <NuxtLink
            v-if="item.link"
            :to="item.link"
            :title="item.title"
            class="tm-button-line"
          >
            More
          </NuxtLink>
        </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["services"],
  methods: {
    linkTitle(title) {
      return title + " Services";
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 1.5rem;
}
</style>