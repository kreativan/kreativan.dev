<template>
  <div id="menu-wrapper" :class="{'is-open': isOpen}">
    <div id="menu-overlay" @click="toggleMenu()"></div>
    <div id="menu" :class="{'is-open': isOpen}">
      <ul class="nav">
        <li>
          <nuxt-link class="nav__link" to="/" title="Home">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__link" to="/about/" title="About">About</nuxt-link>
        </li>
        <li class="parent">
          <span @click="toggleNav()">
            Services
            <i v-html="require(`../assets/svg/chevron-right.svg?raw`)"></i>
          </span>
          <ul>
            <li v-for="item in services" :key="item.slug">
              <nuxt-link class="nav__link" :to="item.path" :title="item.title">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link class="nav__link" to="/portfolio/" title="Portfolio">Portfolio</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__link" to="/hire-me/" title="Hire Me">Hire Me</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isOpen"],
  data() {
    return {
      services: {}
    }
  },
  async fetch() {
    const services = await this.$content('services')
    .where({ read_more: true })
    .sortBy('createdAt')
    .fetch()
    this.services = services
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle-menu');
    },
    toggleNav() {
      event.target.classList.toggle("open")
      // event.target.nextElementSibling.classList.toggle("open")
    }
  },
}
</script>

<style scoped>
#menu {
  box-sizing:border-box;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  overflow:hidden;
  position: fixed;
  z-index:999;
  background: white;
  top:0;
  right:0;
  bottom:0;
  width: 280px;
  transform: translateX(100%);
  transition: transform .3s;
  padding: var(--gutter);
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.1);
}
#menu.is-open {
  transition: transform .4s;
  transform: translateX(0);
}

#menu-overlay {
  display:none;
  position:absolute;
  top: 0;
  bottom:0;
  left:0;
  right:0;
  width:100%;
  right:100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 998;
}
.is-open #menu-overlay {
  display: block;
}

.nuxt-link-exact-active {
  font-weight: 500;
}

#menu .nav {
  width: 100%;
}

#menu .nav > li {
  padding: 10px 0;
  display:block;
}
#menu .nav > li > span,
#menu .nav > li > a {
  display:block;
  font-size: 1.3rem;
  cursor: pointer;
  position: relative;
}

#menu .nav ul {
  overflow: hidden;
  max-height: 0px;
}
#menu .nav .open + ul {
  max-height: 600px;
  transition: all 0.5s;
}
#menu .nav ul > li:first-child {
  margin-top:15px;
}
#menu .nav ul > li {
  padding: 7px 0;
}

#menu .nav i {
  display: inline-block;
  position: absolute;
  right:0;
  top:0px;
  transform: rotate(0deg);
  transition: transform .2s;
  width:26px;
  height:26px;
}
#menu .nav .open i {
  transform: rotate(90deg);
} 

@media(max-width: 768px) {
  #menu {
    width: 240px;
  }
}
</style>