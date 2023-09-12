<template>
    <!-- Modales Automóvil -->
    <div class="modal fade" id="modal_auto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Registro de autom&oacute;vil</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <form @submit.prevent="onSubmit">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <label for="txt_marca_auto" class="form-label">Marca</label>
                                <input type="text" class="form-control" id="txt_marca_auto" required
                                    placeholder="Marca del vehículo">
                            </div>
                            <div class="col-lg-12">
                                <label for="txt_color" class="form-label">Color</label>
                                <input type="text" class="form-control" id="txt_color" required
                                    placeholder="Color del vehículo">
                            </div>
                            <div class="col-lg-12">
                                <label for="txt_placas" class="form-label">Placas</label>
                                <input type="text" class="form-control" id="txt_placas"  placeholder="122NS58" required>
                            </div>

                            <div class="col-lg-12">
                                <label for="txt_descripcion" class="form-label">Descripci&oacute;n</label>
                                <textarea class="form-control" id="txt_descripcion" rows="3" placeholder="Caracter&iacute;sticas del autom&oacute;vil" required></textarea>
                                <!-- <input type="text" class="form-control" id="txt_descripcion"  placeholder="Datos " required> -->
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button> -->
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    <!-- <p class="my-4">Vertically centered modal!</p> -->
    <!-- <b-modal id="modal-automovil" centered title="Registro de autómovil">
        <div class="row">
            <div class="row">
                <div class="col-lg-12">
                    <label for="txt_nombre" class="form-label">Marca</label>
                    <input type="text" class="form-control" id="txt_nombre" placeholder="Marca del equipo">
                </div>
                <div class="col-lg-12">
                    <label for="txt_paterno" class="form-label">Color</label>
                    <input type="text" class="form-control" id="txt_paterno" placeholder="Color del equipo">
                </div>
                <div class="col-lg-12">
                    <label for="txt_materno" class="form-label">Placas</label>
                    <input type="text" class="form-control" id="txt_materno" placeholder="122NS58">
                </div>
            </div>
        </div>
    </b-modal> -->
</template>

<script lang="ts" setup>
import axios from "axios";

const onSubmit = async () => {
    
    var c_marca = document.getElementById("txt_marca_auto");
    var c_color = document.getElementById("txt_color");
    var c_placas = document.getElementById("txt_placas");
    var cod_ingreso = props.data.datos_ingreso.codigo;
    console.log(c_marca.value);
    console.log(c_color.value);
    console.log(c_placas.value);
    console.log(cod_ingreso);
    

    try {
        const formData = new FormData();
        formData.append('marca', c_marca.value);
        formData.append('color', c_color.value);
        formData.append('placas', c_placas.value);
        formData.append('cod_ingreso', cod_ingreso);
        const { data } = await axios.post('http://127.0.0.1:8000/api/ingresos/guardar_auto', formData);
        console.log(JSON.stringify(data));


        if (data.status == "success") {
            alert("Se registró el vehículo para la visita: " + data.datos_visitante.nombre);
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.log(error);
    }
}

const props = defineProps({
    data: Object

});
</script>

<style scoped>
.modal-header h1{
    font-weight: 800;
}

label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}
</style>