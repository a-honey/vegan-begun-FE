<template>
  <ul class="sort-tab-container">
    <li>전체</li>
    <li>음식점</li>
    <li>카페</li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'SortTab'
}
</script>

<style scoped>
.sort-tab-container {
  padding: 10px 20px;
  display: flex;
  border-radius: 5px;
  gap: 10px;
}
</style>
