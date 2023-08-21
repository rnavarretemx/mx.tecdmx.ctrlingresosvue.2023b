<template>
    <Header></Header>
    <Sidebar></Sidebar>

    <div class="col-sm-12 col-md-12 col-lg-12 text-center titulo_uno">
        <h3>Registro de ingreso</h3>
    </div>

    <div class="container">
        <div class="row">
            <h5>Datos de la visita</h5>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="txt_nombre" placeholder="Jhon">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_paterno" class="form-label">Apellido Paterno</label>
                <input type="text" class="form-control" id="txt_paterno" placeholder="Doe">
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
                <label for="txt_materno" class="form-label">Apellido Materno</label>
                <input type="text" class="form-control" id="txt_materno" placeholder="Opcional">
            </div>
        </div>

        <br>
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="txt_fecha_cita" class="form-label">Fechas disponibles</label>
                <!-- <input type="text" class="form-control" id="txt_fecha_cita" placeholder="Jhon"> -->
                <!-- <Datepicker v-model="picked" /> -->
                <!-- <div class="input-group">
                    <Datepicker v-model="picked" /> 
                </div> -->

                <div class="input-group">
                    <!-- <span class="input-group-text" id="basic-addon1"> <i class="bi bi-qr-code-scan"></i> </span> -->
                    <!-- <input type="text" class="form-control" placeholder="C&oacute;digo de la cita"
                        aria-label="C&oacute;digo QR" aria-describedby="basic-addon1"> -->
                        <!-- <Datepicker  class="form-control" v-model="picked" />  -->
                </div>

            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="txt_hora_cita" class="form-label">Hora</label>
                <!-- <input type="text" class="form-control" id="txt_hora_cita" placeholder="Doe"> -->
                <select class="form-select" aria-label="Default select example">
                    <option selected>Seleccione una hora disponible</option>
                    <option value="1">09:00</option>
                    <option value="2">09:30</option>
                    <option value="3">10:00</option>
                    <option value="4">10:30</option>
                </select>
            </div>
        </div>

        <br>
        <div class="row">
            <h5>Motivo de la visita</h5>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_procedencia" class="form-label">Procedencia</label>
                <input type="text" class="form-control" id="txt_procedencia" placeholder="Organismo/Instituci&oacute;n">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_asunto" class="form-label">Asunto</label>
                <input type="text" class="form-control" id="txt_asunto" placeholder="-">
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
                <label for="txt_contacto" class="form-label">Contacto</label>
                <input type="text" class="form-control" id="txt_contacto" placeholder="55 26 54 89 74">
            </div>
        </div>
        <br>
        <div class="row">
            <h5>Datos del personal que recibe la visita</h5>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_personal" class="form-label">¿A qui&eacute;n visita?</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Seleccione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_area_piso" class="form-label">Área o piso</label>
                <input type="text" class="form-control" id="txt_area_piso" placeholder="4 nivel" readonly>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
                <label for="txt_contacto" class="form-label">Extensi&oacute;n</label>
                <input type="text" class="form-control" id="txt_contacto" placeholder="1172" readonly>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                <button type="button" class="btn btn-outline-primary btn-lg">Registrar</button>
            </div>
        </div>


    </div>
</template>
    
<script lang="ts" setup>

import Header from '../layout/Header.vue';
import Sidebar from '../layout/Sidebar.vue';

import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
const picked = ref(new Date())

</script>
    
<style scoped>
.titulo_uno {
    padding-top: 2em;
    padding-bottom: 1em;
}

.titulo_uno h3 {
    font-size: 40px;
}
</style>
    