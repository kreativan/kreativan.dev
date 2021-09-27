<template>
  <div class="split-section" v-view.once>
    
    <div v-if="pos == 'left'" class="ss-media image-animation">
      <nuxt-picture :src="`${image}`"  format="webp" width="640" height="480" />
    </div>

    <div class="ss-content">
      <h2>{{ title }}</h2>
      <h3 class="font-base">{{ subtitle }}</h3>
      <p v-html="text"></p>
    </div>

    <div v-if="pos == 'right'" class="ss-media image-animation">
      <nuxt-picture :src="image" format="webp" width="800" height="600" />
    </div>

  </div>
</template>

<script>
export default {
  props:["pos", "image", "title", "subtitle", "text"]
}
</script>