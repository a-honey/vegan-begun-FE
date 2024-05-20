<script setup lang="ts">
import { useRouter } from 'vue-router'
import logo from '../assets/logo.png'

const router = useRouter()

const handleClick = () => {
  router.push('/search')
}
</script>

<template>
  <section>
    <div class="container">
      <img :src="logo" alt="vegan-begun 로고" width="200" />
      <div class="text-container">
        <div>Vegan-begun에 오신 것을 환영합니다</div>
        <div>비건 라이프스타일을 소개하고</div>
        <div>이를 실천하기 쉽고 즐겁게 만들기 위해</div>
        <div>이곳에 모였습니다.</div>
      </div>
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
  gap: 100px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
