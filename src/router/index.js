import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import SeriesView from '../views/SeriesView.vue'
import Laziness from '../views/LazinessView.vue'
import HowLaziness from '../views/HowLazinessView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/series',
    name: 'series',
    component: SeriesView
  },
  {
    path: '/laziness',
    name: 'laziness',
    component: Laziness
  },
  {
    path: '/how-laziness',
    name: 'how-laziness',
    component: HowLaziness
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
