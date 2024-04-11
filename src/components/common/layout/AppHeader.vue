<script setup lang="ts">
import AppNav from './AppNav.vue'
</script>

<template>
  <header>
    <h1>VEGAN-VEGUN</h1>
    <AppNav />
  </header>
</template>

<script lang="ts">
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 7vh;
  border-bottom: 1px solid #cdcdcd;
}
</style>
