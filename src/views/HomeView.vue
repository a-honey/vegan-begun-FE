<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = () => {
  router.push('/search')
}
</script>

<template>
  <section>
    <div class="container">
      <h1>Vegan-Begun</h1>
    </div>
    <button @click="handleClick">EXPLORE</button>
  </section>
</template>

<style scoped>
section {
  height: 100%;
  padding: 100px 20px;
  display: grid;
  grid-template-rows: 4fr 0.5fr;
  gap: 40px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
