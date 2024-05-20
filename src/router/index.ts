import { createRouter, createWebHistory } from 'vue-router'

import AboutViewVue from '@/views/AboutView.vue'
import DetailItemViewVue from '@/views/DetailItemView.vue'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/detail/:id',
      name: 'detailItem',
      component: DetailItemViewVue,
      props: true
    }
  ]
})

export default router
