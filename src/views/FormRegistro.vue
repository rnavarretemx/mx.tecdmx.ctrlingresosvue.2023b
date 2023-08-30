<template>
    <Header titulo_navbar="Registro de ingreso"></Header>
    <b-container>
        <b-form @submit="onSubmit">
            <b-row>
                <template v-for="json_data in j_data">
                    <component :is="setSelectedComponent(json_data.component)" :block="json_data"
                        @onSelectedItem="changeSelectedItem"></component>
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
var j_data = ref([]);
var txt_areapiso = ref("");

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

/*txt_areapiso = dato_personal.area;
console.log(txt_areapiso); dato_personal !== null || dato_personal !== "" || */

const changeSelectedItem = (e) => {
    var dato_personal = arrOptions.find(o => o.value == e);

    if (dato_personal !== undefined) {
        /* alert("Existe: " + typeof dato_personal); */
        txt_areapiso = dato_personal.area;
        console.log(txt_areapiso);
    }

}

const onSubmit = (e): void => {
    e.preventDefault()
    alert("hola onsubmit");
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
    