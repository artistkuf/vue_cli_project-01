import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/project01',
    name: 'project01',
    component: () => import('../views/Project01.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
