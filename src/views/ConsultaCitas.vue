<template>
    <RegistroCitas></RegistroCitas>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";


import DatosRegistro from '../layout/citas/DatosRegistro.vue';
import RegistroCitas from "../layout/citas/RegistroCitas.vue";


onBeforeMount(() => {
    setEncabezado("Consulta cita");
});
const emit = defineEmits(['getEncabezado']);
const setEncabezado = (etq) => {
    emit('getEncabezado',etq);
}

</script>

<style scoped>
</style>
