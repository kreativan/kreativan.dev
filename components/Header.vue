<template>
  <div id="header" :class="headerClass">
    <div class="logo">
      <nuxt-link to="/">I.M</nuxt-link>
    </div>
    <div>
      <button type="button"
        class="menu-button" 
        @click="toggleMenu()" >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    headerClass() {
      if(this.$route.name === "index") {
        return "header-absolute";
      } else {
        return "header-default";
      }
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle-menu');
    }
  }
}
</script>

<style scoped>
.logo {
  font-size:28px;
  font-weight: 500;
}
#header {
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 var(--gutter);
  z-index:999;
}
#header.header-absolute {
  position:absolute;
  width:100%;
  left:0;
  right:0;
  top:0;
}

.menu-button {
  background: none;
  border:none;
}
.menu-button span {
  display:block;
  width:32px;
  height:2px;
  background: var(--bg-black);
  transition: width .2s;
}
.menu-button span + span {
  margin-top:7px;
}
.menu-button:hover {
  cursor: pointer;
}
.menu-button:hover span:nth-last-child(2) {
  width: 26px;
}

.header-absolute .menu-button {
  animation-name: menu-button-anim;
  animation-fill-mode: both;
  animation-duration: .3s;
  animation-delay: 1.9s;
}

@keyframes menu-button-anim {
  0% {transform: translateX(100%);opacity:0;}
  100% {transform: translateX(0);opacity:1;}
}

@media(max-width: 960px) {
  #header.header-absolute {
    height:65px;
    
  }
  .header-absolute .menu-button {
    animation-delay: .3s;
  }
  .header-absolute .logo a {
    color: white;
  }
  .header-absolute .menu-button span {
    background: white;
  }
}
</style>