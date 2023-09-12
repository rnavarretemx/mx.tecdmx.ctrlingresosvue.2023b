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

                    <div class="col-lg-6 c_side">
                        <!-- Columna derecha -->
                        <div class="row">

                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">

                                <!-- <button class="btn btn-outline-secondary col-12 col-sm-12 col-md-6 col-lg-3"
                                    data-bs-toggle="modal" data-bs-target="#modal_equipo" type="button"> 
                                    <i class="bi bi-plus-circle-fill"></i>
                                </button> -->
                                <!-- id="heading_" -->
                                <!--  + " N&uacute;m. serie: " + equipo.no_serie -->
                                
                                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal"
                                    data-bs-target="#modal_equipo"><i class="bi bi-tools"></i></button>

                                <div class="accordion" id="accordionExample">

                                    <div class="accordion-item" v-for="equipo in data.datos_equipo">
                                        
                                        <h2 class="accordion-header"  :id="`heading_${equipo.id}`">

                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                :data-bs-target="`#collapse_${equipo.id}`" aria-expanded="true"
                                                :aria-controls="`collapse_${equipo.id}`">
                                                {{equipo.marca + " " + equipo.modelo}}
                                            </button>

                                        </h2>

                                        <div :id="`collapse_${equipo.id}`" class="accordion-collapse collapse show"
                                            :aria-labelledby="`heading_${equipo.id}`" data-bs-parent="#accordionExample">

                                            <div class="accordion-body">
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
</template>
    
<script lang="ts" setup>
import { ref, onMounted } from "vue";

const ulr_img = "http://localhost/mx.tecdmx.ctrlingresosapi.2023b/resources/images/";


const props = defineProps({
    data: Object
});

onMounted(() => {
    getInformacionCita();
});

const getInformacionCita = () => {
    /* var c_nombre = document.getElementById("txt_nombre");
    var c_paterno = document.getElementById("txt_paterno");
    var c_materno = document.getElementById("txt_materno");
    var c_procedencia = document.getElementById("txt_procedencia");
    var c_asunto = document.getElementById("txt_asunto");
    var c_contacto = document.getElementById("txt_contacto");
    var c_personal = document.getElementById("txt_personal");
    var c_areapiso = document.getElementById("txt_areapiso");
    var c_extension = document.getElementById("txt_extension");
    var c_fecha = document.getElementById("txt_fecha");
    var c_hora = document.getElementById("txt_hora"); */

    /* c_nombre.value = props.data.datos_visitante.nombre;
    c_procedencia.value = props.data.datos_visitante.procedencia;
    c_asunto.value = props.data.datos_visitante.asunto;
    c_contacto.value = props.data.datos_visitante.contacto;
    c_personal.value = props.data.datos_personal.nombre;
    c_areapiso.value = props.data.datos_personal.area;
    c_extension.value = props.data.datos_personal.extension_telefonica;
    c_fecha.value = props.data.datos_ingreso.fecha_cita;
    c_hora.value = props.data.datos_ingreso.hora_agendada; */

}



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

.sc_cita {
    /* border-radius: 20px;
    background: #EFEDED;
    border: solid 3px #690061; */
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
</style>
    