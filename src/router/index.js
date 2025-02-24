import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import TodoListView from '../views/TodoListView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/blog', component: BlogView },
  { path: '/todo-list', component: TodoListView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
