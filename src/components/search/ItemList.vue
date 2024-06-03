<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import ItemCard from './ItemCard.vue'
import bakery from '../../mock/bakery.json'
import brand from '../../mock/brand.json'
import sauce from '../../mock/sauce.json'
import drink from '../../mock/drink.json'

const route = useRoute()

const bakeryItemCards = bakery.bakery
const brandItemCards = brand.brand
const drinkItemCards = drink.drink
const sauceItemCards = sauce.sauce

const itemsToDisplay = computed(() => {
  const type = route.query.type
  if (!type) {
    return [...bakeryItemCards, ...brandItemCards, ...drinkItemCards, ...sauceItemCards]
  }
  switch (type) {
    case 'bakery':
      return bakeryItemCards
    case 'brand':
      return brandItemCards
    case 'beverage':
      return drinkItemCards
    case 'sauce':
      return sauceItemCards
    default:
      return []
  }
})
</script>

<template>
  <article class="container">
    <ItemCard v-for="(item, index) in itemsToDisplay" :key="index" :data="item" />
  </article>
</template>

<script lang="ts">
export default {
  name: 'ItemList',
  components: { ItemCard }
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
