<script setup lang="ts">
import ItemList from '@/components/search/ItemList.vue'
import TabBar from '@/components/search/TabBar.vue'
</script>

<template>
  <section>
    <input placeholder="검색어를 입력해주세요" />
    <TabBar />
    <ItemList />
  </section>
</template>

<style scoped>
section {
  height: 100%;
  padding: 20px;
}

input {
  width: 100%;
  border: 1px solid #cdcdcd;
  padding: 10px;
  border-radius: 15px;
  background: #ffffff;
}
</style>
