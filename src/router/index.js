import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TodoListView from '../views/TodoListView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/todo-list', component: TodoListView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
