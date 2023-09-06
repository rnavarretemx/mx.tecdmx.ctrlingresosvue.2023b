import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router"
import Home from './views/Home.vue';
import DatosRegistro from './views/DatosRegistro.vue';
import RegistroCitas from './views/RegistroCitas.vue';
import RegistroVisitante from './views/RegistroVisitante.vue'


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
    path: "/cita",
    name: "cita",
    component: DatosRegistro,
  },
  {
    path: "/agenda",
    name: "agenda",
    component: RegistroCitas,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos
})

export default router;