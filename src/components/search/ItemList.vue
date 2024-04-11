<script setup lang="ts">
import ItemCard from './ItemCard.vue'
</script>

<template>
  <article class="container">
    <ItemCard />
    <ItemCard />
    <ItemCard />
  </article>
</template>

<script lang="ts">
export default {
  name: 'ItemList'
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
}
</style>
