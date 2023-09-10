<template>
    <b-container>
        <b-form>
            <b-row>
                <template v-for="json_data in j_data">
                    <component :is="setSelectedComponent(json_data.component)" :block="json_data"></component>
                </template>
            </b-row>
            <b-row>
            </b-row>
        </b-form>
       <!--  {{ data }} -->
    </b-container>
</template>
    
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { components } from '../../composables/components';
const { setSelectedComponent } = components();

const form_data = require('../../json/form_ingreso.json');
var j_data = ref([]);
j_data.value = form_data.body;

const props = defineProps({
    data: Object
});

onMounted(() => {
    getInformacionCita();
});

const getInformacionCita = () =>{
    var c_nombre = document.getElementById("txt_nombre");
    var c_paterno = document.getElementById("txt_paterno");
    var c_materno = document.getElementById("txt_materno");
    var c_procedencia = document.getElementById("txt_procedencia");
    var c_asunto = document.getElementById("txt_asunto");
    var c_contacto = document.getElementById("txt_contacto");
    var c_personal = document.getElementById("txt_personal");
    var c_areapiso = document.getElementById("txt_areapiso");
    var c_extension = document.getElementById("txt_extension");
    var c_fecha = document.getElementById("txt_fecha");
    var c_hora = document.getElementById("txt_hora");

    c_nombre.value = props.data.datos_visitante.nombre;
    c_procedencia.value = props.data.datos_visitante.procedencia;
    c_asunto.value = props.data.datos_visitante.asunto;
    c_contacto.value = props.data.datos_visitante.contacto;
    c_personal.value = props.data.datos_personal.nombre;
    c_areapiso.value = props.data.datos_personal.area;
    c_extension.value = props.data.datos_personal.extension_telefonica;
    c_fecha.value = props.data.datos_ingreso.fecha_cita;
    c_hora.value = props.data.datos_ingreso.hora_agendada;
    /* c_paterno.value = props.data.datos_visitante.paterno;
    c_materno.value = props.data.datos_visitante.materno; */
    /* console.log("props: ",props.data); */
    

}



</script>
    
<style scoped>
.container {
    padding: 50px;
}
</style>
    