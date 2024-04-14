<script setup lang="ts">
import ItemList from '@/components/search/ItemList.vue'
import AppFilter from '@/components/search/Filter.vue'
</script>

<template>
  <section>
    <div>
      <input placeholder="검색어를 입력해주세요" />
      <AppFilter />
    </div>
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

div {
  display: flex;
}
</style>
