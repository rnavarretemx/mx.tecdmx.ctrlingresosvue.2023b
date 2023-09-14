<template>
    <div class="container c_form">

        <div class="subcontainer sc_form">
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
        </div>

    </div>
</template>


<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";

/* Importación del json y del composable de los componentes.  */
import form_registro from "../../json/form_registro.json";
import { components } from '../../composables/components';
import { services } from '../../composables/services';
const { setSelectedComponent } = components();
const { get, response, error } = services();


let txt_areapiso = ref("");
let txt_extension = ref("");

const j_data = ref([]);
let arrOptions: any = [];

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

    const URL_API = "http://127.0.0.1:8000/api/personal/readall/";
    await get(URL_API);
    const array_response: any = JSON.parse(JSON.stringify(response.value)).personal;

    for (var i = 0; i < array_response.length; i++) {
        let persona = {
            "value": array_response[i].id,
            "text":
                array_response[i].nombre + " " + array_response[i].ap_paterno + " ",
            "area": array_response[i].area,
            "cargo": array_response[i].cargo,
            "extension": array_response[i].extension
        }
        arrOptions.push(persona);
    }
    /* Carga la lista del personal a los options del datalist. */
    var componente = form_registro.body.find(o => o.id == "txt_personal");
    componente.options = arrOptions;
    j_data.value = form_registro.body;
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
    
<style>
.c_form {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sc_form{
    margin: 40px;
    padding: 20px;
    border-radius: 20px;
    /* background: #eceff1 ;
    border: solid 5px #690061; */
}

.sc_form .btn_guardar {
    /* background: red !important; */
    color: #690061;
    border: solid 3px #690061 !important;
    background: transparent;
}

.sc_form .btn_guardar:hover{
    background: #690061;
    color: white;
}

@media screen and (max-width: 620px) {
}
</style>
    