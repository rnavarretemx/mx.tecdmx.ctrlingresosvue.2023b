<template>
    <Header></Header>
    <Sidebar></Sidebar>

    <div class="col-sm-12 col-md-12 col-lg-12 text-center titulo_uno">
        <h3>Datos de ingreso</h3>
    </div>

    <div class="container">
        <div class="row">
            <h5>Datos de la visita</h5>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="txt_nombre" placeholder="Jhon" readonly>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_paterno" class="form-label">Apellido Paterno</label>
                <input type="text" class="form-control" id="txt_paterno" placeholder="Doe" readonly>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
                <label for="txt_materno" class="form-label">Apellido Materno</label>
                <input type="text" class="form-control" id="txt_materno" placeholder="Opcional" readonly>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="txt_fecha_cita" class="form-label">Fechas de la cita</label>
                <input type="text" class="form-control" id="txt_fecha_cita" placeholder="12/02/2023" readonly>
              
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="txt_hora_cita" class="form-label">Hora de la cita</label>
                <input type="text" class="form-control" id="txt_hora_cita" placeholder="09:30" readonly>
               
            </div>
        </div>
        <br>
        <div class="row">
            <h5>Motivo de la visita</h5>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_procedencia" class="form-label">Procedencia</label>
                <input type="text" class="form-control" id="txt_procedencia" placeholder="Organismo/Instituci&oacute;n"
                readonly>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_asunto" class="form-label">Asunto</label>
                <input type="text" class="form-control" id="txt_asunto" placeholder="-" readonly>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
                <label for="txt_contacto" class="form-label">Contacto</label>
                <input type="text" class="form-control" id="txt_contacto" placeholder="55 26 54 89 74" readonly>
            </div>
        </div>
        <br>
        <div class="row">
            <h5>Datos del personal que recibe la visita</h5>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <label for="txt_personal" class="form-label">¿A qui&eacute;n visita?</label>
                <input type="text" class="form-control" id="txt_personal" placeholder="55 26 54 89 74" readonly>
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

            <div class="col-sm-12 col-md-6 col-lg-6">
                <h5>Registro de equipo</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">No. Serie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
                <h5>Datos de autom&oacute;viles</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Color</th>
                            <th scope="col">Placas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <br>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                <button type="button" class="btn btn-outline-primary btn-lg">AUTORIZAR</button>
            </div>
        </div>
        <br>


    </div>
</template>
    
<script lang="ts" setup>

import Header from '../layout/Header.vue';
import Sidebar from '../layout/Sidebar.vue';
</script>
    
<style scoped>
/* div {
    border: solid 1px red;
}
 */

/* .container {
    border: solid 1px red;
} */

.titulo_uno {
    padding-top: 2em;
    padding-bottom: 1em;
}

.titulo_uno h3 {
    font-size: 40px;
}
</style>
    