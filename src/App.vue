<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/organisms/layout/AppHeader.vue'
import NavBar from './components/organisms/layout/NavBar.vue'
</script>

<template>
  <main>
    <AppHeader />
    <section>
      <RouterView />
    </section>
    <NavBar />
  </main>
</template>

<style scoped>
main {
  width: 700px;
  height: 100vh;
  margin: auto;
  position: relative;
}

section {
  width: 100%;
  height: calc(100%-4vh);
  align-items: center;
  padding-top: 4vh;
}
</style>
