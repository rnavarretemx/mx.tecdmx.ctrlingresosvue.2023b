<template>
    <!-- Modales Equipo -->
    <!-- <div class="modal fade" id="modal_registro_vigilante" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Pantalla vigilancia</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <h5>Autoriza ingreso</h5>
                        <div class="col-lg-6">
                            <label for="txt_nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="txt_nombre" placeholder="Nombre">
                        </div>
                        <div class="col-lg-6">
                            <label for="txt_paterno" class="form-label">Cargo</label>
                            <input type="text" class="form-control" id="txt_paterno" placeholder="Cargo">
                        </div>
                        <br>
                        <div class="col-lg-12">
                            <label for="txt_materno" class="form-label">C&oacute;digo de confirmaci&oacute;n</label>
                            <input type="text" class="form-control" id="txt_materno" placeholder="2589458">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <div class="col-lg-6">
                            <label for="txt_hora_ingreso" class="form-label">Hora ingreso</label>
                            <input type="text" class="form-control" id="txt_hora_ingreso" placeholder="09:00:00">
                        </div>
                        <div class="col-lg-6">
                            <label for="txt_hora_salida" class="form-label">Hora salida</label>
                            <input type="text" class="form-control" id="txt_hora_salida" placeholder="10:30:00">
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

    <b-modal id="modal-vigilante" centered title="Vigilancia">
        <!-- <p class="my-4">Vertically centered modal!</p> -->
        <div class="row">
            <div class="col-lg-6">
                <label for="txt_nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="txt_nombre" placeholder="Nombre">
            </div>
            <div class="col-lg-6">
                <label for="txt_paterno" class="form-label">Cargo</label>
                <input type="text" class="form-control" id="txt_paterno" placeholder="Cargo">
            </div>
            <br>
            <div class="col-lg-12">
                <label for="txt_materno" class="form-label">C&oacute;digo de confirmaci&oacute;n</label>
                <input type="text" class="form-control" id="txt_materno" placeholder="2589458">
            </div>
        </div>

        <br>
        <div class="row">
            <div class="col-lg-6">
                <label for="txt_hora_ingreso" class="form-label">Hora ingreso</label>
                <input type="text" class="form-control" id="txt_hora_ingreso" placeholder="09:00:00">
            </div>
            <div class="col-lg-6">
                <label for="txt_hora_salida" class="form-label">Hora salida</label>
                <input type="text" class="form-control" id="txt_hora_salida" placeholder="10:30:00">
            </div>
        </div>
    </b-modal>
</template>

<script lang="ts" setup>

</script>

<style scoped>
label{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}
</style>