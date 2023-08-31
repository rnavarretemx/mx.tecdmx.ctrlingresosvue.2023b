<template>
    <Header titulo_navbar="Registro de ingreso"></Header>
    <b-container>
        <b-form @submit.prevent="onSubmit">
            <b-row>
                <template v-for="json_data in j_data">
                    <component :is="setSelectedComponent(json_data.component)" :block="json_data"
                        @onSelectedItem="changeSelectedItem"
                        @onSelectedDate="setDatePicker"
                        @onSelectedTime="setTimePicker"></component>
                    <!-- {{ txt_areapiso}} :txt_model="json_data.id"-->
                </template>
            </b-row>
        </b-form>
    </b-container>
</template>


<script lang="ts" setup>
import router from '@/router';
import axios from "axios";
import { ref, onBeforeMount, onMounted } from "vue";

import Header from '../layout/Header.vue';
import title from "../components/title.vue"
import subtitle from "../components/subtitle.vue"
import input_text from "../components/input_text.vue"
import input_select from "../components/input_select.vue"
import input_datalist from "../components/input_datalist.vue"
import input_datepicker from "../components/input_datepicker.vue"
import input_timepicker from "../components/input_timepicker.vue"
import button_primary from "../components/button_primary.vue"
import form_registro from "../json/form_registro.json"
import { type } from 'jquery';

let arrOptions: any = [];
const personal = ref([]);
const ingreso = ref([]);
var j_data = ref([]);
let txt_areapiso = ref("");
let txt_extension = ref("");
var fecha_select = "";
var hora_select = "";

const components = {
    title,
    subtitle,
    input_text,
    input_select,
    input_datalist,
    input_datepicker,
    input_timepicker,
    button_primary
}

onBeforeMount(() => {
    getData();
});

const getData = async () => {
    j_data = form_registro.body;

    try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/personal/readall/");
        personal.value = data.personal;

        for (var i = 0; i < personal.value.length; i++) {
            let persona = {
                "value": personal.value[i].id,
                "text":
                    personal.value[i].nombre + " " + personal.value[i].ap_paterno + " ",
                "area": personal.value[i].area,
                "cargo": personal.value[i].cargo,
                "extension": personal.value[i].extension
            }
            arrOptions.push(persona);
            var componente = j_data.find(o => o.id == "txt_personal");
            componente.options = arrOptions;
        }
    } catch (error) {
        console.log(error);
    }
};

const setDatePicker = (e) =>{
    /* alert(e); */
    fecha_select=e;
}

const setTimePicker = (e) =>{
    /* alert(e); */
    hora_select=e;
}

const changeSelectedItem = (e) => {
    /* Realizar la inserción de los datos con v-model */
    var dato_personal = arrOptions.find(o => o.value == e);
    var c_area = document.getElementById("txt_areapiso");
    var c_extension = document.getElementById("txt_extension");
    if (dato_personal !== undefined) {
        txt_areapiso = dato_personal.area;
        txt_extension = dato_personal.extension;

        c_area.value = txt_areapiso;
        c_extension.value = txt_extension;

        /* console.log(dato_personal.area);
        console.log(dato_personal.extension); */

    } else {
        c_area.value = "";
        c_extension.value = "";
    }

}

const onSubmit = async (e) => {
    /* e.preventDefault()
    alert("hola onsubmit"); */

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
        /* console.log(data); */
        /* router.push("/registro") */
        router.push({ name: 'cita', params: { registro:  data} });
        
    } catch (error) {
        console.log(error);
    }

}

const setSelectedComponent = (tab): any => {
    return components[tab];
};

</script>
    
<style scoped>
.container {
    padding: 50px;
}
</style>
    