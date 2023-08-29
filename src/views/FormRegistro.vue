<template>
    <Header titulo_navbar="Registro de ingreso"></Header>
    <b-container>
        <b-form>
            <b-row>
                <template v-for="json_data in data">
                    <component :is="setSelectedComponent(json_data.component)" :block="json_data"></component>
                </template>
            </b-row>
        </b-form>
    </b-container>
</template>


<script lang="ts" setup>
import router from '@/router';
import axios from "axios";
import { ref } from "vue";

import Header from '../layout/Header.vue';
import title from "../components/title.vue"
import subtitle from "../components/subtitle.vue"
import input_text from "../components/input_text.vue"
import input_select from "../components/input_select.vue"
import input_datepicker from "../components/input_datepicker.vue"
import input_timepicker from "../components/input_timepicker.vue"
import button_primary from "../components/button_primary.vue"
import form_registro from "../json/form_registro.json"


let arrOptions: any = [];
/* const data: [] = form_registro.body; */
const data = ref(form_registro.body);
/* var data_options =  data.find(o => o.id == "txt_personal"); */
/* data_options.options = getData(); */
const personal = ref([]);

const components = {
    title,
    subtitle,
    input_text,
    input_select,
    input_datepicker,
    input_timepicker,
    button_primary
}


const getData = async () => {
    try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/personal/readall/");
        personal.value = data.personal;

        for (var i = 0; i < personal.value.length; i++) {
            let persona = {
                "value": personal.value[i].id,
                "text": personal.value[i].nombre + " " + personal.value[i].ap_paterno + " " + (personal.value[i].materno != null) ? personal.value[i].materno : "",
            }
            arrOptions.push(persona);
        }
    } catch (error) {
        console.log(error);
    }
    return arrOptions;
};
getData();
const setSelectedComponent = (tab): any => {
    return components[tab];
};

/* const componente: any = data.find(o => o.id == "txt_personal");
    componente.options = arrOptions; */

</script>
    
<style scoped>
.container {
    padding: 50px;
}
</style>
    