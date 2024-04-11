<template>
  <div class="main-tab">
    <div @click="selectedCategory = 'FOOD'">FOOD</div>
    <div @click="selectedCategory = 'BRAND'">BRAND</div>
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
  padding: 10px;
  width: 100%;
}
.sub-tab {
  display: flex;
  justify-content: space-between;
}
.sub-tab-item {
  display: flex;
  background-color: #cdcdcd;
  padding: 5px 20px;
}
</style>
