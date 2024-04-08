import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import InsightView from '../views/InsightView.vue'
import MapView from '../views/MapView.vue'
import RecommendView from '../views/RecommendView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/insight',
      name: 'insight',
      component: InsightView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: RecommendView
    },
    {
      path: '/settings',
      name: 'setting',
      component: SettingsView
    }
  ]
})

export default router
