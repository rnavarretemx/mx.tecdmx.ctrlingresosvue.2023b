<template>
    <!-- Modales Equipo -->
    <!-- <div class="modal fade" id="modal_equipo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Registro de equipo</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
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
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </div>
    </div> -->

    <b-modal id="modal-equipo" centered title="Registro de equipo">
        <!-- <p class="my-4">Vertically centered modal!</p> -->
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
    </b-modal>
</template>

<script lang="ts" setup></script>

<style scoped>
label{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}
</style>