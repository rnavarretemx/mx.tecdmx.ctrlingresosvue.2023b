<template>
    <FormRegistro v-if="showForm" 
    @onSubmit="onSubmit" 
    @setDatePicker="setDatePicker" 
    @setTimePicker="setTimePicker">
    </FormRegistro>
    <DescargaQR v-else
    :data="ingreso"></DescargaQR>

</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import FormRegistro from '../layout/registro/FormRegistro.vue';
import DescargaQR from '../layout/registro/DescargaQR.vue';

var showForm = ref(true);
var showQR = ref(false);
var fecha_select = "";
var hora_select = "";
 const ingreso = ref();

const setDatePicker = (e) => {
    fecha_select = e;
}

const setTimePicker = (e) => {
    hora_select = e;
}

const onSubmit = async (e) => {
    e.preventDefault();

    /* change to v-model */
    var c_nombre = document.getElementById("txt_nombre");
    var c_paterno = document.getElementById("txt_paterno");
    var c_materno = document.getElementById("txt_materno");
    var c_procedencia = document.getElementById("txt_procedencia");
    var c_asunto = document.getElementById("txt_asunto");
    var c_contacto = document.getElementById("txt_contacto");
    var c_personal = document.getElementById("txt_personal_input");
    /* var c_fecha = document.getElementById("txt_fecha"); */
    var c_fecha = fecha_select;
    var c_hora = hora_select;
   

    try {

        const formData = new FormData();
        formData.append('nombre', c_nombre.value + " " + c_paterno.value + " " + c_materno.value);
        formData.append('procedencia', c_procedencia.value);
        formData.append('asunto', c_asunto.value);
        formData.append('contacto', c_contacto.value);
        formData.append('personal_id', c_personal.value);
        formData.append('fecha', c_fecha);
        formData.append('hora_agendada', c_hora);


        const { data } = await axios.post('http://127.0.0.1:8000/api/ingresos/create', formData);
        ingreso.value = data;
        console.log(JSON.stringify(data));

        if (data != null) {

            showForm.value = false;
            showQR.value = true;

        } else {
            showForm.value = true;
            showQR.value = false;
        }

    } catch (error) {
        console.log(error);
    }

}

const emit = defineEmits(['getEncabezado']);

onBeforeMount(() => {
    setEncabezado("Registro de cita");
});

const setEncabezado = (etq) => {
    emit('getEncabezado',etq);
}

</script>

<style scoped></style>