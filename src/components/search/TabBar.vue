<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const { toggleFilter } = defineProps<{ toggleFilter: () => void }>()

const router = useRouter()

function onOpenDetail(query: string) {
  router.push(`/search?type=${query}`)
  toggleFilter()
}
</script>

<template>
  <div @click="selectedCategory = 'BRAND'" :class="{ active: selectedCategory === 'BRAND' }">
    FOOD
  </div>
  <div class="sub-tab">
    <div class="sub-tab-item" @click="onOpenDetail('bakery')">Bakery</div>
    <div class="sub-tab-item" @click="onOpenDetail('beverage')">Beverage</div>
    <div class="sub-tab-item" @click="onOpenDetail('sauce')">Sauce</div>
    <div class="sub-tab-item" @click="onOpenDetail('retortFood')">Retort Food</div>
  </div>
  <div @click="selectedCategory = 'BRAND'" :class="{ active: selectedCategory === 'BRAND' }">
    BRAND
  </div>
  <div class="sub-tab">
    <div class="sub-tab-item" @click="onOpenDetail('cafe')">Cafe</div>
    <div class="sub-tab-item" @click="onOpenDetail('fastFoodChainStore')">
      Fast Food Chain Store
    </div>
    <div class="sub-tab-item" @click="onOpenDetail('noBrand')">NoBrand</div>
    <div class="sub-tab-item" @click="onOpenDetail('vegan')">Vegetarian Brand</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TabBar',
  data() {
    return {
      selectedCategory: ''
    }
  }
}
</script>

<style scoped>
.main-tab {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  padding: 5px;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
}

.main-tab > div {
  padding-bottom: 10px;
  border-bottom: 3px solid #d8eadd;
}
.main-tab > .active {
  border-bottom: 3px solid #4e8563;
}
.sub-tab {
  display: flex;
  justify-content: space-between;
}
.sub-tab-item {
  display: flex;
  background-color: #257766;
  border-radius: 20px;
  color: white;
  padding: 5px 20px;
  font-size: small;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
