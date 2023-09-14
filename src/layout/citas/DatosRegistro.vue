<template>
    <!-- <b-container>
        <b-form>
            <b-row>
                <template v-for="json_data in j_data">
                    <component :is="setSelectedComponent(json_data.component)" :block="json_data"></component>
                </template>
            </b-row>
            <b-row>
            </b-row>
        </b-form>
    </b-container> -->

    <div class="container c_cita">

        <div class="subcontainer sc_cita">
            <div class="row">
                <div class="col col-sm-12 col-md-12 col-lg-12 text-center titulo_uno">
                    <!-- <h5>El c&oacute;digo ingresado cuenta con la siguiente información</h5> -->
                    <h5>Datos registrados para la visita</h5>
                </div>

                <div class="row col-lg-12 text-center img_qr">

                    <div class="col-lg-6 c_side">

                        <div class="col col-sm-12 col-md-12 col-lg-12 ">
                            <img :src="(ulr_img + data.datos_ingreso.cod_qr)" alt="">
                            <h6> <strong>C&oacute;digo generado: </strong> <span>
                                    <br> <br>
                                    {{ data.datos_ingreso.codigo }}</span>
                            </h6>
                        </div>
                        <br>

                        <div class="row">

                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">

                                <!-- <button class="btn btn-outline-secondary col-12 col-sm-12 col-md-6 col-lg-3"
                                    data-bs-toggle="modal" data-bs-target="#modal_equipo" type="button"> 
                                    <i class="bi bi-plus-circle-fill"></i>
                                </button> -->
                                <!-- id="heading_" -->

                                <div class="col-12 col-lg-12 db_add">

                                    <button type="button" class="btn btn-outline-secondary btn_i" data-bs-toggle="modal"
                                        data-bs-target="#modal_equipo">
                                        <i class="bi bi-plus-circle-fill"></i>&nbsp; Agregar equipo
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-outline-secondary btn_i" data-bs-toggle="modal"
                                        data-bs-target="#modal_auto">
                                        <i class="bi bi-plus-circle-fill"></i>&nbsp; Agregar auto
                                    </button>

                                </div>

                                <div class="accordion" id="accordionExample">

                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button ac" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                Equipo registrados: &nbsp; <span> {{ data.datos_equipo.length }}</span>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show"
                                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">

                                                <div class="card" v-for="equipo in data.datos_equipo">
                                                    <h5 class="card-header">
                                                        <strong>{{ equipo.marca + " " + equipo.modelo }} </strong>
                                                        <span>{{ equipo.no_serie }} </span>
                                                    </h5>

                                                    <div class="card-body">
                                                        <h5 class="card-title">

                                                            <!-- {{equipo.no_serie}} -->

                                                        </h5>
                                                        <p class="card-text">
                                                            {{equipo.descripcion}}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button ac" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                Autom&oacute;viles registrados: &nbsp; <span> {{ data.datos_auto.length
                                                }}</span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse show"
                                            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">

                                                <div class="card" v-for="auto in data.datos_auto">
                                                    <h5 class="card-header">
                                                        <strong>{{ auto.marca + " " + auto.color }} </strong>
                                                        <span>{{ auto.placas }} </span>
                                                    </h5>

                                                    <div class="card-body">
                                                        <h5 class="card-title">

                                                            <!-- {{equipo.no_serie}} -->

                                                        </h5>
                                                        <p class="card-text">
                                                            {{auto.descripcion}}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 c_side">
                        <!-- Columna derecha -->



                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                                <h6> <strong>Nombre</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_visitante.nombre }}
                                </h6>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                                <h6> <strong>Contacto</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_visitante.contacto }}
                                </h6>
                            </div>

                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                                <h6> <strong>Procedencia</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_visitante.procedencia }}
                                </h6>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                                <h6> <strong>Asunto</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_visitante.asunto }}
                                </h6>
                            </div>

                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                                <h6> <strong>Fecha</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_ingreso.fecha_cita }}
                                </h6>
                            </div>

                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                                <h6> <strong>Hora</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_ingreso.hora_agendada }}
                                </h6>
                            </div>
                            &nbsp;
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 d_datos">
                                <h6> <strong>Nombre del personal de la visita</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_personal.nombre }}
                                </h6>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                                <h6> <strong>&Aacute;rea</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_personal.area }}
                                </h6>
                            </div>

                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                                <h6> <strong>Extensi&oacute;n telef&oacute;nica</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_personal.extension_telefonica }}
                                </h6>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                                <h6> <strong>Ingreso</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_personal.hora_entrada }}
                                </h6>
                            </div>

                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                                <h6> <strong>Salida</strong> </h6>
                                <h6 class="txt_dato">{{ data.datos_personal.hora_salida }}
                                </h6>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>

    <ModalEquipo :data="data"></ModalEquipo>
    <ModalAutomovil :data="data"></ModalAutomovil>
</template>
    
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ModalEquipo from '../registro/ModalEquipo.vue';
import ModalAutomovil from '../registro/ModalAutomovil.vue';

const ulr_img = "http://localhost/mx.tecdmx.ctrlingresosapi.2023b/resources/images/";


const props = defineProps({
    data: Object
});

onMounted(() => {

});

</script>
    
<style scoped>
.titulo_uno {
    padding: 25px;
}

.titulo_uno h5 {
    font-size: 20px;
    font-weight: 800;
}

.c_cita {
    padding: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.img_qr img {
    width: 15em;
    margin: 25px;
    border: solid 5px black;
    border-radius: 10px;
}

.c_side {
    /* border: solid 1px red; */
}

.txt_dato {
    font-size: 14px !important;
    font-weight: 500;
}

.d_datos h6 strong {
    font-size: 12px;
}

.d_datos {
    /* border: solid 1px blue; */
    text-align: left;
}

/* DISEÑO ACCORDION */

.db_add {
    /* border: solid 1px red; */
    text-align: right;
    padding-bottom: 10px;
}

.ac {
    font-size: 14px;
    font-weight: 500;
}

.ac span {
    font-size: 16px;
    font-weight: 700;
}

.btn_i {
    text-align: right;
    font-weight: 600;
}

.card {
    margin: 5px;
    text-align: left;
}

.card .card-header {
    font-size: 14px;
}

.card .card-header span {
    font-size: 12px;
    float: right;
}

.card .card-title {
    font-size: 12px;
}
</style>
    