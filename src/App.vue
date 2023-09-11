<template>

    <Header :encabezado="etiqueta"></Header>
    <router-view @getEncabezado="setEncabezado"></router-view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Header from './layout/Header.vue';

const etiqueta = ref("");
const setEncabezado = (etq) => {
    
    etiqueta.value = etq;
}

</script>

<style>

*{
    font-family: 'Poppins';
    font-style: normal;
}

</style>
