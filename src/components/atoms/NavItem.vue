<template>
  <div class="nav-item-container">
    <div>아이콘</div>
    <div>메뉴</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NavItem'
}
</script>

<style scoped>
.nav-item-container {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
