<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import bakery from '../mock/bakery.json'
import sauce from '../mock/sauce.json'
import drink from '../mock/drink.json'
import nobrand from '../mock/nobrand.json'
import convenience_store from '../mock/convenience_store.json'
import fastfood from '../mock/fastfood.json'
import cafe from '../mock/cafe.json'
import vegan from '../mock/vegun.json'

const route = useRoute()

const bakeryItemCards = bakery.bakery
const drinkItemCards = drink.drink
const sauceItemCards = sauce.sauce
const nobrandItemCards = nobrand.nobrand
const conenienceStoreItemCards = convenience_store.convenience_store
const fastfoodItemCards = fastfood.data
const cafeItemCards = cafe.cafe
const veganItemCards = vegan.vegan

interface FoodItem {
  index: number
  name: string
  imgURL_main?: string
  tags?: string[]
  imgURL_list?: string
  description?: string
  URL?: string
}

const itemsToDisplay = computed<FoodItem[]>(() => {
  const type = route.query.type as string
  switch (type) {
    case 'bakery':
      return bakeryItemCards
    case 'convenience_store':
      return conenienceStoreItemCards
    case 'drink':
      return drinkItemCards
    case 'sauce':
      return sauceItemCards
    case 'noBrand':
      return nobrandItemCards
    case 'fastfood':
      return fastfoodItemCards
    case 'cafe':
      return cafeItemCards
    case 'vegan':
      return veganItemCards
    default:
      return []
  }
})

const food = ref<FoodItem | null>(null)

const loadFood = () => {
  const data = itemsToDisplay.value
  food.value = data.find((foodItem: FoodItem) => foodItem.index === Number(route.params.id)) || null
}

watch(route, loadFood, { immediate: true })

const goToURL = () => {
  if (!food.value?.URL) return
  window.open(food.value.URL, '_blank')
}
</script>

<template>
  <section>
    <div class="container">
      <h1>{{ food?.name }}</h1>
      <div class="img-container">
        <img v-if="food?.imgURL_main" :src="food?.imgURL_main" />
      </div>
    </div>
    <div class="content-container">
      <div class="item-container">
        <p class="tag" v-for="(tag, index) in food?.tags" :key="index"># {{ tag }}</p>
      </div>
      <div class="item-container">
        <label> 성분표 </label>
        <img v-if="food?.imgURL_list" :src="food?.imgURL_list" />
      </div>
      <div v-if="food?.description" class="item-container">
        <label>기타</label>
        <p>{{ food?.description }}</p>
      </div>
      <button v-if="food?.URL" @click="goToURL">구매하러 가기</button>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 20px;
}
.img-container {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}

img {
  width: 100%;
}

h1 {
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 10px;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.item-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 20px;
}
.item-container > label {
  font-size: 18px;
  font-weight: 700;
}

.tag {
  font-size: 15px;
  font-weight: 700;
}

button {
  background-color: #257766;
  color: white;
  width: 100%;
  border-radius: 15px;
  border: 0px;
  padding: 15px;
  font-size: large;
  font-weight: 700;
}
</style>
