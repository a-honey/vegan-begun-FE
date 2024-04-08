<template>
  <header>
    <div class="logo">
      <div>로고</div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  height: 4vh;
}
</style>
