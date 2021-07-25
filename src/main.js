import { createApp } from 'vue'
import App from './App.vue'
import './scss/style.scss'
import { createRouter, createWebHistory } from 'vue-router'
import Input from './components/Input.vue'
import Index from './components/Index.vue'
import store from './store/index'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Index',
      component: Index
    },
    {
      path: '/',
      component: Input
    }
  ]
})
createApp(App).use(router).use(store).mount('#app')
