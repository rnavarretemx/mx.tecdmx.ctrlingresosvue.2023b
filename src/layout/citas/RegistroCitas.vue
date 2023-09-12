<template>
    <div class="container c_agenda">

        <div class="subcontainer sc_agenda">
            <div class="row">
            <div class="col-2 col-sm-2 col-md-6 col-lg-6">
                <button v-b-modal.modal-vigilante type="button" class="btn btn-outline-secondary" data-bs-toggle="modal"
                    data-bs-target="#modal_registro_vigilante" ><i class="bi bi-person-add"></i></button>

                <!-- <b-button variant="outline-secondary" v-b-modal.modal-vigilante :sm="12" :md="12" :lg="5">
                <i class="bi bi-person-add"></i></b-button> -->
                <!-- <b-icon icon="person"></b-icon> -->

            </div>
            <!-- <b-button variant="outline-primary"><b-icon icon="person"></b-icon> Settings</b-button> -->
            <div class="col-10 col-sm-10 col-md-6 col-lg-6">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">
                        <i class="bi bi-qr-code-scan"> </i>
                        <!-- <b-icon icon="code-square" ></b-icon> -->
                    </span>
                    <input type="text" class="form-control" placeholder="C&oacute;digo de la cita"
                        @keyup.enter="getBusquedaCodigo($event)" @change="getBusquedaCodigo($event)" aria-label="C&oacute;digo QR"
                        aria-describedby="basic-addon1">
                </div>

            </div>
        </div>
        <br>

        <div class="row table-responsive">
            <b-pagination v-if="!showNoData" align="center" :total-rows="ingreso.length" v-model="paginaActual"
                :per-page="itemsPorPagina"> </b-pagination>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Visitante </th>
                        <th scope="col">Visita</th>
                        <th scope="col">Horario</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="showNoData" class="center_table">
                        <th colspan="5">NO EXISTEN REGISTROS</th>
                    </tr>

                    <tr v-else v-for="(i, index) in paginador(ingreso)" v-bind:key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ i.visitante.nombre }}</td>
                        <td>{{ i.personal.nombre }}</td>
                        <td>{{ i.fecha_cita + " | " + i.hora_agendada }}</td>
                        <td>

                            <b-button @click="verRegistroCita(i.codigo)" variant="outline-secondary" :sm="12" :md="12"
                                :lg="5">
                                <i class="bi bi-eye-fill"></i>
                            </b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        
    </div>

    <ModalRegistroVigilante></ModalRegistroVigilante>
</template>

<script lang="ts" setup >
import { ref, onBeforeMount } from "vue";
import axios from "axios";
const ingreso = ref([]);
import ModalRegistroVigilante from './ModalRegistroVigilante.vue';

const paginaActual = ref(1);
const showNoData = ref(false);
var itemsPorPagina = 5;

onBeforeMount(() => {
    getData();
});



const getData = async () => {

    try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/ingresos/readall/");

        if (data.status == "success") {
            ingreso.value = data.datos_ingresos;
            showNoData.value = false;
        } else {
            /* alert("true"); */
            showNoData.value = true;
        }
    } catch (error) {
        console.log(error);
    }
};


const paginador = (ingreso) => {
    const indiceInicio = (paginaActual.value - 1) * itemsPorPagina;
    const indiceFinal =
        indiceInicio + itemsPorPagina > ingreso.length
            ? ingreso.length
            : indiceInicio + itemsPorPagina;
    console.log(indiceInicio + " " + indiceFinal);
    return ingreso.slice(indiceInicio, indiceFinal);
}

const emit = defineEmits(['getBusquedaCodigo']);
const getBusquedaCodigo = (codigo) => {
    /* console.log(codigo.target.value); */
    emit('getBusquedaCodigo', codigo.target.value);
}
const verRegistroCita = (codigo) => {
    /* alert("Cargando información... " + codigo);*/
    emit('getBusquedaCodigo', codigo); 
}



</script>

<style scoped>
.c_agenda {
    padding: 50px;
    /* border: solid 1px red; */
}

.sc_agenda{
    padding: 35px;
    border-radius: 20px;
    background: #EFEDED;
    border: solid 3px #690061;
}

.titulo_uno {
    padding-top: 2em;
    padding-bottom: 1em;
}

.titulo_uno h3 {
    font-size: 40px;
}

.center_table {
    text-align: center;
}
</style>