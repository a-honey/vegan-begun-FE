<script setup lang="ts">
import FilterIcon from '../../assets/filter.svg'
import TabBar from './TabBar.vue'
</script>

<template>
  <div>
    <img :src="FilterIcon" alt="필터" width="40px" @click="toggleSection" />
    <div class="background" @click="toggleSection" v-if="isFilterOpen">
      <section class="modal-container" @click.stop="">
        <h2>Filters</h2>
        <div class="container">
          <h3 class="sub-title">Category</h3>
          <TabBar :toggleFilter="toggleSection" />
          <!-- <h3 class="sub-title">Price</h3> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppFilter',
  data() {
    return {
      isFilterOpen: false
    }
  },
  methods: {
    toggleSection() {
      this.isFilterOpen = !this.isFilterOpen
    }
  }
}
</script>

<style scoped>
.modal-container {
  position: absolute;
  top: 200px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  z-index: 800;
}

h2 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}
.sub-title {
  font-size: 20px;
  font-weight: 700;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
