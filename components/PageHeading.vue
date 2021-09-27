<template>
  <header id="page-heading" :class="mainClass">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
    <div v-if="image" class="page-heading-image reveal-anim anim-long margin-medium">
      <nuxt-picture 
        :src="`${image}`" 
        width="1200"
        height="420"
        format="webp"
        :alt="title"
      />
    </div>
  </header>
</template>

<script>
export default {
  props: ["title", "subtitle", "image", "container"],
  data() {
    return {
      isLoaded: false,
    }
  },
  mounted() {
    this.isLoaded = true
  },
  computed: {
    mainClass() {
      let cls = "container";
      cls += this.container ? `-${this.container}` : "";
      cls += this.isLoaded ? " is-loaded" : "";
      return cls;
    }
  }
}
</script>

<style scoped>
#page-heading {
  overflow: hidden;
}
h1 {
  font-size: 3rem;
  margin:0;
}
h3 {
  font-size: 1.1rem;
  font-family: var(--font-base);
  margin:7px 0 0 0;
  position:relative;
}

@keyframes line-anim {
  0% {width: 0;}
  100% {width: 100px;}
}
@keyframes line-anim-text {
  0% {padding-left: 0;}
  100% {padding-left: 120px;}
}

@media(min-width: 960px) {
  h3 {
    padding-left:80px;
  }
  h3:before {
    content: "";
    position: absolute;
    left: 0;
    width: 70px;
    height: 2px;
    background: #1c1b20;
    top: 50%;
  }
}

@media(max-width: 768px) {
  h1 {
    font-size:2rem;
  }
  h3 {
    font-size:1rem;
    margin-top:10px;
  }
  .page-heading-image {
    margin-left: -25px;
    margin-right: -25px;
  }
}
</style>