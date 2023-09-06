<template>
    <!-- <Header titulo_navbar="Datos del ingreso"></Header> -->
    <!-- <Sidebar></Sidebar> -->

    <div class="container c_qr">
        <div class="subcontainer sc_qr">
            <div class="row">
                <div class="col col-sm-12 col-md-12 col-lg-12 text-center titulo_uno">
                    <h5>El registro de su visita se ha generado con la siguiente información.</h5>
                </div>
<!-- c&oacute;digo QR. -->
                <div class="row col-lg-6 text-center img_qr">

                    <div class="col col-sm-12 col-md-12 col-lg-12">
                        <img :src="ulr_img + data.datos_ingreso.codigo_qr" alt="">
                        <h6>C&oacute;digo generado: <span>{{ data.datos_ingreso.codigo }}</span></h6>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                        <h6>Nombre del visitante</h6>
                        <h6 class="txt_dato">
                            {{ data.datos_visitante.nombre }}
                        </h6>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                        <h6>Fecha y hora de la cita</h6>
                        <h6 class="txt_dato">{{ data.datos_ingreso.fecha + " a las " + data.datos_ingreso.hora_agendada }}
                        </h6>
                    </div>
                </div>

                <div class="row  col-lg-6 text-center">

                    <!-- <div class="col col-sm-6 col-md-6 col-lg-12 text-center">
                        <h6>Nombre del visitante</h6>
                        <h6 class="txt_dato">
                            {{ data.datos_visitante.nombre }}
                        </h6>
                    </div>
                    <div class="col col-sm-6 col-md-6 col-lg-12 text-center">
                        <h6>Fecha y hora de la cita</h6>
                        <h6 class="txt_dato">{{ data.datos_ingreso.fecha + " a las " + data.datos_ingreso.hora_agendada }}
                        </h6>
                    </div>-->

                    <div class="col col-sm-12 col-md-12 col-lg-12 text-center div_botones">

                        <h6>¿Necesitas registrar tu equipo de c&oacute;mputo o autom&oacute;vil?</h6>
                        <!-- <b-button variant="outline-secondary" v-b-modal.modal-equipo :sm="12" :md="12" :lg="5">
                            REGISTRAR EQUIPO</b-button>

                        <b-button variant="outline-secondary" v-b-modal.modal-automovil :sm="12" :md="12" :lg="5">
                            REGISTRAR AUTOM&Oacute;VIL</b-button> -->

                            <button class="btn btn-outline-secondary col-sm-12 col-md-12 col-lg-5" data-bs-toggle="modal"
                    data-bs-target="#modal_equipo" type="button">REGISTRAR EQUIPO</button>

                        <button class="btn btn-outline-secondary col-sm-12 col-md-12 col-lg-5" data-bs-toggle="modal"
                    data-bs-target="#modal_auto" type="button">REGISTRAR AUTOM&Oacute;VIL</button>

                        <button class="btn btn-outline-danger btn-lg col-lg-4" type="button"
                            @click="descargarQR()">DESCARGAR COMPROBANTE</button>
                    </div> 

                </div>
            </div>
        </div>



        <ModalEquipo :data="data"></ModalEquipo>
        <ModalAutomovil :data="data"></ModalAutomovil>


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

const ulr_img = "http://localhost/mx.tecdmx.ctrlingresosapi.2023b/resources/images/";



const descargarQR = (): void => {
    /* router.push("/") */
    alert("descargando comprobante...");
}

</script>
    
<style scoped>
.c_qr {
    padding: 50px;
    /* border: solid 1px red; */
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sc_qr {
    border-radius: 20px;
    background: #EFEDED;
    /* border: solid 1px blue; */
}

.titulo_uno {
    /* padding-top: 2em;
    padding-bottom: 1em; */
    padding: 25px;
}

.titulo_uno h3 {
    font-size: 30px;
    font-weight: 800;
}

.img_qr {
    display: flex;
    /* justify-content: center;
    align-items: center; 
    border: solid 2px blue;*/
}

.img_qr img {
    width: 15em;
    margin: 15px;
}

.div_botones {
    padding: 2em;
}

.div_botones button {
    margin: 10px;
    width: 100%;
    font-weight: 600;
    letter-spacing: 1px;
}

.txt_dato {
    font-weight: 400;
}

.d_datos{
    margin-top: 20px;
    margin-bottom: 20px;
}

/* .row div {
    border: solid 1px red;
} */
</style>
    