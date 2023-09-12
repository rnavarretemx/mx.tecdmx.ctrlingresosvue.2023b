<template>
    <!-- Modales Equipo -->
    <div class="modal fade" id="modal_equipo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Registro de equipo</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="onSubmit">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <label for="txt_marca" class="form-label">Marca</label>
                                <input type="text" class="form-control" id="txt_marca" required
                                    placeholder="Marca del equipo">
                            </div>
                            <div class="col-lg-12">
                                <label for="txt_modelo" class="form-label">Modelo</label>
                                <input type="text" class="form-control" id="txt_modelo" required
                                    placeholder="Modelo del equipo">
                            </div>
                            <div class="col-lg-12">
                                <label for="txt_noserie" class="form-label">N&uacute;mero de serie</label>
                                <input type="text" class="form-control" id="txt_noserie" required
                                    placeholder="12452122NS58">
                            </div>
                            <div class="col-lg-12">
                                <label for="txt_descripcion" class="form-label">Descripci&oacute;n</label>
                                <textarea class="form-control" id="txt_descripcion" rows="3" placeholder="Caracter&iacute;sticas del equipo" required></textarea>
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

    <!-- <b-modal id="modal-equipo" centered title="Registro de equipo">
        <div class="row">
            <div class="col-lg-12">
                <label for="txt_nombre" class="form-label">Marca</label>
                <input type="text" class="form-control" id="txt_nombre" placeholder="Marca del equipo">
            </div>
            <div class="col-lg-12">
                <label for="txt_paterno" class="form-label">Modelo</label>
                <input type="text" class="form-control" id="txt_paterno" placeholder="Modelo del equipo">
            </div>
            <div class="col-lg-12">
                <label for="txt_materno" class="form-label">N&uacute;mero de serie</label>
                <input type="text" class="form-control" id="txt_materno" placeholder="12452122NS58">
            </div>
        </div>
    </b-modal> -->
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";

const registro = ref();

const onSubmit = async () => {
    var c_marca = document.getElementById("txt_marca");
    var c_modelo = document.getElementById("txt_modelo");
    var c_noserie = document.getElementById("txt_noserie");
    var cod_ingreso = props.data.datos_ingreso.codigo;

    try {
        const formData = new FormData();
        formData.append('marca', c_marca.value);
        formData.append('modelo', c_modelo.value);
        formData.append('no_serie', c_noserie.value);
        formData.append('cod_ingreso', cod_ingreso);
        const { data } = await axios.post('http://127.0.0.1:8000/api/ingresos/guardar_equipo', formData);
        registro.value = data;
        console.log(JSON.stringify(data));


        if (data.status == "success") {
            alert("Se registró el equipo para la visita: " + data.datos_visitante.nombre);
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