<template>
    
    <b-container>
        <b-form @submit.prevent="onSubmit">
            <b-row>
                <template v-for="json_data in j_data">
                    <component :is="setSelectedComponent(json_data.component)" :block="json_data"
                        @onSelectedItem="changeSelectedItem" @onSelectedDate="setDatePicker"
                        @onSelectedTime="setTimePicker">
                    </component>
                </template>
            </b-row>
        </b-form>
    </b-container>
</template>


<script lang="ts" setup>
import router from '@/router';
import axios from "axios";
import { ref, onBeforeMount } from "vue";


/* Importación del json y del composable de los componentes.  */
import form_registro from "../../json/form_registro.json";
import { components } from '../../composables/components';
const { setSelectedComponent } = components();

/* var fecha_select = "";
var hora_select = ""; */
let txt_areapiso = ref("");
let txt_extension = ref("");
var j_data = ref([]);
/* j_data.value = form_registro.body; */
let arrOptions: any = [];
const personal = ref([]);
const ingreso = ref();

onBeforeMount(() => {
    getData();
});

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

    } else {
        c_area.value = "";
        c_extension.value = "";
    }

}

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

const emit = defineEmits([
    'onSubmit',
    'setDatePicker',
    'setTimePicker'
])

const setDatePicker = (e) => {
    emit('setDatePicker', e);

}

const setTimePicker = (e) => {
    emit('setTimePicker', e);
}

const onSubmit = async (e) => {
    emit('onSubmit', e);
}

</script>
    
<style scoped>
.container {
    padding: 50px;
}
</style>
    