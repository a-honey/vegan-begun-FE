<template>
  <div class="main-tab">
    <div @click="selectedCategory = 'FOOD'" :class="{ active: selectedCategory === 'FOOD' }">
      FOOD
    </div>
    <div @click="selectedCategory = 'BRAND'" :class="{ active: selectedCategory === 'BRAND' }">
      BRAND
    </div>
  </div>
  <div class="sub-tab" v-if="selectedCategory === 'FOOD'">
    <div class="sub-tab-item">Bakery</div>
    <div class="sub-tab-item">Beverage</div>
    <div class="sub-tab-item">Sauce</div>
    <div class="sub-tab-item">Retort Food</div>
  </div>
  <div class="sub-tab" v-else-if="selectedCategory === 'BRAND'">
    <div class="sub-tab-item">Cafe</div>
    <div class="sub-tab-item">Fast Food Chain Store</div>
    <div class="sub-tab-item">NoBrand</div>
    <div class="sub-tab-item">Vegeterian Brand</div>
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
