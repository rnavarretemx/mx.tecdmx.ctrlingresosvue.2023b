<template>
    <!-- <Header titulo_navbar="Datos del ingreso"></Header> -->
    <!-- <Sidebar></Sidebar> -->

    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 text-center titulo_uno">
                <h5>El registro de su visita se ha generado con el siguiente c&oacute;digo QR.</h5>
                <!-- {{"data: "+ data_o.message}} -->
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 text-center img_qr">
                <!-- <img src="../../assets/qr-code.webp" alt=""> -->
                <!-- <img src="http://localhost/resources/images/`${data.datos_ingreso.codigo_qr}`" alt=""> -->
                <!-- <img src="http://localhost/mx.tecdmx.ctrlingresosapi.2023b/resources/images/{data.datos_ingreso.codigo_qr}" alt=""> -->
                <!-- <img alt="" :src="http://localhost/mx.tecdmx.ctrlingresosapi.2023b/resources/images/`${data.datos_ingreso.codigo_qr}`"> -->
                <img :src="src_url+data.datos_ingreso.codigo_qr" alt=""> 
                <h6>C&oacute;digo generado: <span>{{data.datos_ingreso.codigo}}</span></h6>
            </div>
        </div>

        <div class="row text-center">
            <div class="col-sm-6 col-md-6 col-lg-6 text-center">
                <h6>Nombre del visitante</h6>
                <h6 class="txt_dato">
                     {{ data.datos_visitante.nombre  }}
                    </h6>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 text-center">
                <h6>Fecha y hora de la cita</h6>
                <h6 class="txt_dato">{{data.datos_ingreso.fecha + " a las " + data.datos_ingreso.hora_agendada}}</h6>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 text-center div_botones">
                <!-- <button class="btn btn-outline-secondary col-sm-12 col-md-12 col-lg-5" data-bs-toggle="modal"
                    data-bs-target="#modal_equipo" type="button">¿Necesitas registrar
                    equipo de c&oacute;mputo?</button> -->
                    <b-button variant="outline-secondary" v-b-modal.modal-equipo :sm="12" :md="12" :lg="5">¿Necesitas registrar
                    equipo de c&oacute;mputo?</b-button>

                <!-- <button class="btn btn-outline-secondary col-sm-12 col-md-12 col-lg-5" data-bs-toggle="modal"
                    data-bs-target="#modal_auto" type="button">¿Necesitas registrar
                    autom&oacute;vil?</button> -->

                    <b-button variant="outline-secondary" v-b-modal.modal-automovil :sm="12" :md="12" :lg="5">¿Necesitas registrar
                        autom&oacute;vil?</b-button>

            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                <button class="btn btn-outline-danger btn-lg col-lg-4" type="button" @click="descargarQR()">DESCARGAR QR</button>
            </div>
        </div>

        <br>


        <ModalEquipo></ModalEquipo>
        <ModalAutomovil></ModalAutomovil>


    </div>
</template>
    
<script lang="ts" setup>
import ModalEquipo from './ModalEquipo.vue';
import ModalAutomovil from './ModalAutomovil.vue';

import { ref } from "vue";
import router from '@/router';
import { useRoute, useRouter } from "vue-router";

var src_url = "http://localhost/mx.tecdmx.ctrlingresosapi.2023b/resources/images/";

const props = defineProps({
    data: Object
  
});

const descargarQR=():void => {
    router.push("/")
}

</script>
    
<style scoped>

.container{
padding: 50px;
}
.titulo_uno {
    padding-top: 2em;
    padding-bottom: 1em;
}

.titulo_uno h3 {
    font-size: 40px;
}

.img_qr img {
    width: 12em;
}

.div_botones {
    padding: 2em;
}

.div_botones button {
    margin: 10px;
}

.txt_dato {
    font-weight: 400;
}
</style>
    