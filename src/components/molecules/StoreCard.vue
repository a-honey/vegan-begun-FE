<template>
  <div class="store-card">
    <div>이미지</div>
    <div class="store-card-container">
      <div>가게이름</div>
      <ul class="store-card-tags">
        <li>태그</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'StoreCard'
}
</script>

<style scoped>
.store-card {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}
</style>
