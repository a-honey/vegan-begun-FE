<template>
  <div class="store-card" @click="goToDetail">
    <div class="img-container">
      <img v-if="data.imgURL_main" :src="data.imgURL_main" />
      <img v-else :src="defaultImage" />
    </div>
    <div class="store-card-container">
      <div class="name">{{ data.name }}</div>
      <ul class="store-card-tags">
        <li v-for="(tag, index) in data.tags" :key="index"># {{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import blank from '@/assets/blank_image.png'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  name: 'ItemCard',
  setup(props) {
    const router = useRouter()

    const goToDetail = () => {
      router.push(`/detail/${props.data.index}?type=${props.data.type}`)
    }

    return {
      goToDetail,
      defaultImage: blank
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
  background-color: #eefff3;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.name {
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

.store-card-tags {
  display: flex;
  gap: 10px;
}
</style>
