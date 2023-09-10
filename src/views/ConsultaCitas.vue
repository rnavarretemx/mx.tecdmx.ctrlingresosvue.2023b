<template>
    <RegistroCitas v-if="show" @getBusquedaCodigo="getBusquedaCodigo"></RegistroCitas>
    <DatosRegistro v-else :data="ingreso"></DatosRegistro>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import DatosRegistro from '../layout/citas/DatosRegistro.vue';
import RegistroCitas from "../layout/citas/RegistroCitas.vue";
import axios from "axios";

const ingreso = ref({});
const show = ref(true);

onBeforeMount(() => {
    setEncabezado("Consulta cita");
});

const emit = defineEmits(['getEncabezado']);
const setEncabezado = (etq) => {
    emit('getEncabezado', etq);
}

const getBusquedaCodigo = async (codigo_qr) => {

const codigo = codigo_qr.target.value;

const url = ("http://127.0.0.1:8000/api/ingresos/read/"+codigo);

    try {
        const { data } = await axios.get(url);

        /* console.log(data); */
        if (data.status == "success") {
            ingreso.value = data;
            /* console.log("ingreso: ", ingreso);
            console.log("data: ", data); */
            show.value = false;

        } else {
            /* alert(data.status); */
            show.value = true;
        }
    } catch (error) {
        console.log(error);
    }
}

</script>

<style scoped></style>
