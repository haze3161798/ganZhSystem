import { createApp } from 'vue'
import App from './App.vue'
import './scss/style.scss'
import { createRouter, createWebHashHistory } from 'vue-router'
import Input from './components/Input.vue'
import Index from './components/Index.vue'
import store from './store/index'
const router = createRouter({
  history: createWebHashHistory(),
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
const app = createApp(App)
app.use(router).use(store).mount('#app')
