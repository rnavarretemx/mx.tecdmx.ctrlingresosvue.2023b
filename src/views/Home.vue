<template>
    <h1>hola</h1>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";

const emit = defineEmits(['getEncabezado']);

onBeforeMount(() => {
    setEncabezado("Inicio");
});

const setEncabezado = (etq) => {
    emit('getEncabezado',etq);
}

</script>

<style scope></style>