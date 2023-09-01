/* import Vue from "vue";
import VueRouter from "vue-router";

import FormRegistro from './views/FormRegistro.vue';
import DatosRegistro from './views/DatosRegistro.vue';
import DescargarQR from './views/DescargaQR.vue';
import RegistroCitas from './views/RegistroCitas.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: FormRegistro,
  },
  {
    path: "/registro",
    name: "registro",
    component: DatosRegistro,
  },
  {
    path: "/cita",
    name: "cita",
    component: DescargarQR,
  },
  {
    path: "/agenda",
    name: "agenda",
    component: RegistroCitas,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
}); */

import { createApp } from 'vue'
import App from './App.vue' 

import { createRouter, createWebHistory } from "vue-router"
import FormRegistro from './views/FormRegistro.vue';
import DatosRegistro from './views/DatosRegistro.vue';
import DescargarQR from './views/DescargaQR.vue';
import RegistroCitas from './views/RegistroCitas.vue';
    

const routeInfos = [
      {
        path: "/",
        name: "home",
        component: FormRegistro,
      },
      {
        path: "/registro",
        name: "registro",
        component: DatosRegistro,
      },
      {
        path: "/cita",
        name: "cita",
        component: DescargarQR,
        props: true,
      },
      {
        path: "/agenda",
        name: "agenda",
        component: RegistroCitas,
      },
    ]
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    })

export default router;