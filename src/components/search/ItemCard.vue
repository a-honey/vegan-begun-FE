<template>
  <div class="store-card" @click="goToDetail">
    <div class="img-container">
      <img src="/한입감자전.jpg" />
    </div>
    <div class="store-card-container">
      <div class="name">한입 감자전</div>
      <ul class="store-card-tags">
        <li>#혼입가능</li>
        <li>#비건추정</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ItemCard',
  setup() {
    const router = useRouter()

    const goToDetail = () => {
      router.push('/detail')
    }

    return {
      goToDetail
    }
  }
})
</script>

<style scoped>
.store-card {
  display: flex;
  flex-direction: column;
  position: relative;
}

.img-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
}

img {
  width: 100%;
}

.store-card-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  background-color: #d8eadd;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.name {
  font-size: 20px;
  font-weight: 700;
}

.store-card-tags {
  display: flex;
  gap: 10px;
}
</style>
