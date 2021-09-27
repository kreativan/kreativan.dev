<template>
  <div id="hero">

    <div class="hero-content">
      <div>
        <h3 class="font-base">{{ hero.subtitle }}</h3>
        <h1>{{ hero.title }}</h1>
        <p v-html="hero.text"></p>
      </div>
    </div>

    <div class="hero-media reveal-anim anim-long">
      <nuxt-picture 
        :src="`${hero.image}`" 
        format="webp" 
        width="700" 
        height="720" 
      />
    </div>

    <HeroBar />

  </div>
</template>

<script>
export default {
  props: ["hero"],
}
</script>

<style scoped>
#hero {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  display: grid;
  grid-template-columns: 45% 55%;
}

.hero-content {
  display:flex;
  align-items: center;
  padding: var(--gutter);
  padding-right: 70px;
}

h1, h3, p {
  animation-name: slide-bottom;
  animation-fill-mode: both;
  animation-duration: .5s;
}

h3 {
  font-size:2rem;
  font-weight: 400;
  margin:0;
  font-family: var(--font-base);
  margin:0;
  line-height: 1;
  animation-delay: .2s;
}

h1 {
  font-size: 4rem;
  line-height:1;
  margin: 5px 0;
  animation-delay: .4s;
}

p {
  animation-delay: .7s;
}

.hero-media {
  box-sizing: border-box;
  position:relative;
  overflow: hidden;
}
.hero-media img {
  width:100%;
  height:100%;
  object-fit: cover;
}

@keyframes slide-bottom {
  0% {transform: translateY(50%);opacity:0;}
  100% {transform: translateX(0);opacity:1;}
}

@media(max-width: 960px) {
  .reveal-anim:before {
    animation:none;
    display:none !important;
  }
  .reveal-anim:after {
    display:none !important;
  } 
  #hero {
    background: var(--bg-black);
    grid-template-columns: 1fr;
  }
  .hero-media {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:100%;
    height:100vh;
    z-index:1;
  }
  .hero-content {
    position:relative;
    z-index:2;
    align-items: flex-end;
  }
  .hero-content:before {
    content:"";
    display:block;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8));
  }
  .hero-content h3 {
    font-size: 1.4rem;
    color: white;
  }
  .hero-content h1 {
    font-size: 2.4rem;
    color: white;
  }
  .hero-content p {
    color: rgba(255, 255, 255, 0.9);
  }
  .hero-content * {
    animation-delay: .2s;
  }
}

@media(max-width: 480px) {
  .hero-content {
    padding: var(--gutter);
  }
}
</style>