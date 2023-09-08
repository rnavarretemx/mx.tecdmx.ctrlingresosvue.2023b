import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router"
import Home from './views/Home.vue';

import RegistroVisitante from './views/RegistroVisitante.vue'
import ConsultaCitas from './views/ConsultaCitas.vue'


const routeInfos = [
  {
    path: "/",
    name: "index",
    component: Home,
  }, {
    path: "/registro",
    name: "registro",
    component: RegistroVisitante,
  },
  {
    path: "/agenda",
    name: "agenda",
    component: ConsultaCitas,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos
})

export default router;