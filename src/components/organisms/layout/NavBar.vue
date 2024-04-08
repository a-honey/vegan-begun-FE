<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <ul>
      <RouterLink to="/">
        <div>아이콘</div>
        <div>Home</div>
      </RouterLink>
      <RouterLink to="/insight">
        <div>아이콘</div>
        <div>Insight</div>
      </RouterLink>
      <RouterLink to="/map">
        <div>아이콘</div>
        <div>Map</div>
      </RouterLink>
      <RouterLink to="/recommend">
        <div>아이콘</div>
        <div>Recommend</div>
      </RouterLink>
      <RouterLink to="/settings">
        <div>아이콘</div>
        <div>Settings</div>
      </RouterLink>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 8vh;
  background-color: #cecece;
}

nav ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
