<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import ItemCard from './ItemCard.vue'

import bakery from '../../mock/bakery.json'
import sauce from '../../mock/sauce.json'
import drink from '../../mock/drink.json'
import nobrand from '../../mock/nobrand.json'
import fastfood from '../../mock/fastfood.json'
import convenience_store from '../../mock/convenience_store.json'
import cafe from '../../mock/cafe.json'
import vegan from '../../mock/vegun.json'

const route = useRoute()

const bakeryItemCards = bakery.bakery

const drinkItemCards = drink.drink
const sauceItemCards = sauce.sauce
const nobrandItemCards = nobrand.nobrand
const conenienceStoreItemCards = convenience_store.convenience_store
const fastfoodItemCards = fastfood.data
const cafeItemCards = cafe.cafe
const veganItemCards = vegan.vegan

const itemsToDisplay = computed(() => {
  const type = route.query.type
  if (!type) {
    return [
      ...bakeryItemCards,
      ...drinkItemCards,
      ...sauceItemCards,
      ...nobrandItemCards,
      ...conenienceStoreItemCards,
      ...fastfoodItemCards,
      ...cafeItemCards,
      ...veganItemCards
    ].sort(() => Math.random() - 0.5)
  }
  switch (type) {
    case 'bakery':
      return bakeryItemCards
    case 'retortFood':
      return conenienceStoreItemCards
    case 'beverage':
      return drinkItemCards
    case 'sauce':
      return sauceItemCards
    case 'noBrand':
      return nobrandItemCards
    case 'fastFoodChainStore':
      return fastfoodItemCards
    case 'cafe':
      return cafeItemCards
    case 'vegan':
      return veganItemCards
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
