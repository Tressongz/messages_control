import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('../views/CardsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
