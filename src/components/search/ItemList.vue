<script setup lang="ts">
import ItemCard from './ItemCard.vue'
import bakery from '../../mock/bakery.json'
import brand from '../../mock/brand.json'
</script>

<template>
  <article class="container">
    <ItemCard v-for="(item, index) in bakeryItemCards" :key="index" :data="item"></ItemCard>
    <ItemCard
      v-for="(item, index) in vegeterian_brandItemCards"
      :key="index"
      :data="item"
    ></ItemCard>
  </article>
</template>

<script lang="ts">
export default {
  name: 'ItemList',
  components: { ItemCard },
  data() {
    return {
      bakeryItemCards: bakery.bakery,
      vegeterian_brandItemCards: brand.brand
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
}
</style>
