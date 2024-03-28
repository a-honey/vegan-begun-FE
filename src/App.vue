<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/organisms/layout/AppHeader.vue'
import NavBar from './components/organisms/layout/NavBar.vue'
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <NavBar />
</template>

<style scoped>
main {
  background-color: pink;
  color: white;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
