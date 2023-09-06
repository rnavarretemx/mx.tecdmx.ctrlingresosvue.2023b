<template>
    <h6>Sistema para el control de visitas del TECDMX.</h6>
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