import { createApp } from '@vue/compat'
import App from './App.vue'
import router from "./router";

import { BootstrapVue, IconsPlugin, BIcon, BootstrapVueIcons  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.js'

import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

createApp(App)
    .use(BootstrapVue)
    .use(IconsPlugin)
    .use(BIcon)
    .use(BootstrapVueIcons)
    .use(BootstrapIconsPlugin)
    .use(router)
    .mount('#app')
