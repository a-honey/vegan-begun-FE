<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/common/layout/AppHeader.vue'
// import AppFooter from './components/common/layout/AppFooter.vue'
</script>

<template>
  <main>
    <AppHeader />
    <RouterView />
    <!-- <AppFooter /> -->
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  height: 95vh;
  margin: auto;
  position: relative;
  background-color: #ffffff;
}
</style>
