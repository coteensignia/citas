import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/HomeView.vue";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),

  routes:[
    {
      name:"home",
      path:"/",
      component:HomeView


    },
    {
      name:"contact",
      path:"/contact",
      component:ContactView


    }
  ]
})

export default router