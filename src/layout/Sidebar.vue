<template>
    <!-- <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">&nbsp;</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <button type="button" class="btn btn-outline-light">
                 <i class="bi bi-calendar-plus-fill"></i> Registro</button>
            <button type="button" class="btn btn-outline-light"> <i class="bi bi-calendar3"></i> Calendario</button>
        </div>
    </div> -->
    <b-sidebar id="sidebar-1" title="Menú" bg-variant="secondary" class="bg_sbar" shadow>

        <button type="button" class="btn btn-outline-light" @click="navegaRegistro()"><i
                class="bi bi-calendar-plus-fill"></i> Registro</button>
        <button type="button" class="btn btn-outline-light"> <i class="bi bi-calendar3"></i> Calendario</button>

    </b-sidebar>
</template>

<script lang="ts" setup>
import router from '@/router';

const navegaRegistro = (): void => {
    router.push("/agenda")
}


</script>
    
<style scoped>
.bg-secondary {
    background-color: #75096C !important;
}

.bg_sbar button {
    width: 90%;
    margin: 10px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    background: #FF8200;
}

.offcanvas-body button {
    text-align: left;
}

.offcanvas-body button i {
    font-size: 20px;
}
</style>
    