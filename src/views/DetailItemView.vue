<script setup lang="ts">
import bakery from '../mock/bakery.json'
</script>

<template>
  <section>
    <div class="container">
      <h1>{{ name }}</h1>
      <div class="img-container">
        <img v-if="imgURL_main" :src="imgURL_main" />
      </div>
    </div>
    <div class="content-container">
      <div class="item-container">
        <p class="tag" v-for="(tag, index) in tags" :key="index"># {{ tag }}</p>
      </div>
      <div class="item-container">
        <label> 성분표 </label>
        <img v-if="imgURL_main" :src="imgURL_list" />
      </div>
      <div v-if="description" class="item-container">
        <label>기타</label>
        <p>{{ description }}</p>
      </div>
      <button v-if="URL" @click="goToURL">구매하러 가기</button>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'DetailItemViewVue',
  props: ['id'],
  data() {
    const food = bakery.bakery.find((foodItem) => foodItem.index === Number(this.id))

    return {
      index: food?.index,
      name: food?.name,
      description: food?.description,
      tags: food?.tags,
      URL: food?.URL,
      imgURL_main: food?.imgURL_main,
      imgURL_list: food?.imgURL_list
    }
  },
  methods: {
    goToURL() {
      if (!this.URL) return
      window.open(this.URL, '_blank')
    }
  }
}
</script>

<style scoped>
section {
  padding: 20px;
}
.img-container {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}

img {
  width: 100%;
}

h1 {
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 10px;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.item-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 20px;
}
.item-container > label {
  font-size: 18px;
  font-weight: 700;
}

.tag {
  font-size: 15px;
  font-weight: 700;
}
</style>
