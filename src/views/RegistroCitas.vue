<template>
    <Header titulo_navbar="Visitas TECDMX"></Header>
    <!-- <Sidebar></Sidebar> -->

    <!--  <div class="col-sm-12 col-md-12 col-lg-12 text-center titulo_uno">
        <h3>Registro de citas</h3>
    </div> -->

    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6">
                <!-- <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal"
                    data-bs-target="#modal_registro_vigilante" ><i class="bi bi-person-add"></i></button> -->
             
                    <b-button variant="outline-secondary" v-b-modal.modal-vigilante :sm="12" :md="12" :lg="5">
                    <b-icon icon="person"></b-icon>
                </b-button>

            </div>
            <!-- <b-button variant="outline-primary"><b-icon icon="person"></b-icon> Settings</b-button> -->
            <div class="col-sm-6 col-md-6 col-lg-6">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">
                        <!-- <i class="bi bi-qr-code-scan"> </i>  -->
                        <b-icon icon="code-square" ></b-icon>
                        
                    </span>
                    <input type="text" class="form-control" placeholder="C&oacute;digo de la cita"
                        aria-label="C&oacute;digo QR" aria-describedby="basic-addon1">
                </div>

            </div>
        </div>
        <br>

        <div class="row">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Visitante </th>
                        <th scope="col">Visita</th>
                        <th scope="col">Fecha y hora</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>20/08/2023 09:00</td>
                        <td>
                            <!-- <button type="button" class="btn btn-outline-secondary"><i class="bi bi-eye-fill"></i></button> -->
                            <b-button variant="outline-secondary"  :sm="12" :md="12" :lg="5">
                                <b-icon icon="gear-fill"></b-icon>
                            </b-button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>20/08/2023 09:00</td>
                        <td>
                            <!-- <button type="button" class="btn btn-outline-secondary"><i class="bi bi-eye-fill"></i> </button>-->
                                <b-button variant="outline-secondary"  :sm="12" :md="12" :lg="5">
                                <b-icon icon="gear-fill"></b-icon>
                            </b-button>
                            
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>20/08/2023 09:00</td>
                        <td>
                            <!-- <button type="button" class="btn btn-outline-secondary"><i class="bi bi-eye-fill"></i></button> -->
                            <b-button variant="outline-secondary"  :sm="12" :md="12" :lg="5">
                                <b-icon icon="gear-fill"></b-icon>
                            </b-button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>

    <ModalRegistroVigilante></ModalRegistroVigilante>
</template>

<script lang="ts" >
import Header from '../layout/Header.vue';
import Sidebar from '../layout/Sidebar.vue';

import ModalRegistroVigilante from '../layout/ModalRegistroVigilante.vue';

import { BIconGearFill, BIconPerson, BIconCodeSquare } from 'bootstrap-vue'

export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: { 
        Header, 
        BIconGearFill,
        BIconCodeSquare,
        BIconPerson // <- The icon needs to be registered with your page/app
    }
  }
</script>

<style scoped>
/* .row div {
    border: solid 1px red;
} */

.container {
    padding: 50px;
}

.titulo_uno {
    padding-top: 2em;
    padding-bottom: 1em;
}

.titulo_uno h3 {
    font-size: 40px;
}</style>