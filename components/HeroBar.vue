<template>
  <div class="hero-bar">
      <nav>
        <a
          href="https://www.linkedin.com/in/kreativan-dev/"
          target="_blank"
          rel="nofollow, noopener"
          title="Ivan Milincic LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/lokomotivan"
          target="_blank"
          rel="nofollow, noopener"
          title="Ivan Milincic Twitter"
        >
          Twitter
        </a>
        <a
          href="https://github.com/kreativan"
          target="_blank"
          rel="nofollow, noopener"
          title="Ivan Milincic GitHub"
        >
          GitHub
        </a>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  padding: 10px;
  position:absolute;
  width:110px;
  height: 100vh;
  top:0;
  bottom:0;
  right:0;
  background: white;
  z-index:997;

  animation-name: slide-right;
  animation-fill-mode: both;
  animation-duration: .3s;
  animation-delay: 1.4s;

}

.hero-bar > nav {
  transform: rotate(-90deg);
  white-space: nowrap;
}
.hero-bar a {
  margin-right:15px;
  text-decoration: none;
  color: var(--color-muted);
  font-size:0.9rem;
  letter-spacing: 0.5px;
}
.hero-bar a:hover {
  color:var(--color-heading);
}

@keyframes slide-right {
  0% {transform: translateX(100%);opacity:0;}
  100% {transform: translateX(0);opacity:1;}
}

@media(max-width: 960px) {
  .hero-bar {
    display:none;
  }
}
</style>