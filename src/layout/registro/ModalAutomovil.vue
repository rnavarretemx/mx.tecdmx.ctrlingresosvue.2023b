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
                                <label for="txt_marca" class="form-label">Marca</label>
                                <input type="text" class="form-control" id="txt_marca" required
                                    placeholder="Marca del equipo">
                            </div>
                            <div class="col-lg-12">
                                <label for="txt_color" class="form-label">Color</label>
                                <input type="text" class="form-control" id="txt_color" required
                                    placeholder="Color del equipo">
                            </div>
                            <div class="col-lg-12">
                                <label for="txt_placas" class="form-label">Placas</label>
                                <input type="text" class="form-control" id="txt_placas"  placeholder="122NS58" required>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
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
    alert("guardarAutomovil");
    var c_marca = document.getElementById("txt_marca");
    var c_color = document.getElementById("txt_color");
    var c_placas = document.getElementById("txt_placas");
}
</script>

<style scoped>
label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}
</style>