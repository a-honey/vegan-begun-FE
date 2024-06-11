<template>
  <div>
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div v-if="isMenuOpen" class="background" @click="toggleMenu">
      <nav :class="{ 'show-menu': isMenuOpen }" @click="toggleMenu">
        <a href="/about">ABOUT</a>
        <a href="/search">SEARCH</a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdXPE8Hn7y0thEpd5Wg-F6K0WV6GGxLWK8e1mcmeX1WBXVN8w/viewform"
          target="_blank"
          >CONTACT</a
        >
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'AppNav',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
<style scoped>
nav {
  display: none;
}

.show-menu {
  display: block;
  position: absolute;
  background-color: #d8eadd;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 20px;
  z-index: 999;
}

a {
  font-size: 20px;
  color: black;
  text-decoration: none;
  font-weight: 700;
}

.hamburger-menu {
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 4px;
  border-radius: 5px;
  background-color: white;
}
</style>
