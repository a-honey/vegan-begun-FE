<script setup lang="ts">
import ItemCard from './ItemCard.vue'
</script>

<template>
  <section class="container">
    <ItemCard />
    <ItemCard />
    <ItemCard />
  </section>
</template>

<script lang="ts">
export default {
  name: 'ItemList'
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: repeat(1fr, 2);
}
</style>
