<script setup lang="ts">
import ItemCard from './ItemCard.vue'
import bakery from '../../mock/bakery.json'
import brand from '../../mock/brand.json'
import sauce from '../../mock/sauce.json'
import drink from '../../mock/drink.json'
</script>

<template>
  <article class="container">
    <ItemCard v-for="(item, index) in bakeryItemCards" :key="index" :data="item" />
    <ItemCard v-for="(item, index) in drinkItemCards" :key="index" :data="item" />
    <ItemCard v-for="(item, index) in sauceItemCards" :key="index" :data="item" />
  </article>
</template>

<script lang="ts">
export default {
  name: 'ItemList',
  components: { ItemCard },
  data() {
    return {
      bakeryItemCards: bakery.bakery,
      vegeterian_brandItemCards: brand.brand,
      drinkItemCards: drink.drink,
      sauceItemCards: sauce.sauce
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
