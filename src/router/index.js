import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './Home'

Vue.use(VueRouter)

const routes = [
  ...HomeRouter,
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
