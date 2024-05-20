<script setup lang="ts">
import AppNav from './AppNav.vue'
import logo from '../../../assets/logo_text.png'
</script>

<template>
  <header>
    <img :src="logo" alt="vegan-begun" width="200" height="40" />
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
  padding: 0 20px 0px 10px;
  height: 7vh;
  background-color: #4e8563;
  color: white;
}
</style>
