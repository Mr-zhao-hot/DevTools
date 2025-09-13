import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/layout/BaseLayout/index.vue'
// import Video from "@/views/VideoGet/index.vue"
import Ip from "@/views/IP/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"page",
      component:HomeView,
      children:[
        {
          path:"ip",
          name:"ip",
          component:Ip
        }
      ]
    }
  ],
})

export default router
