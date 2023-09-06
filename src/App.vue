<template>
    <!-- <Sidebar></Sidebar> -->

    <!-- <FormRegistro></FormRegistro> -->
    <!-- <DescargarQR></DescargarQR> -->
    <!-- <DatosRegistro></DatosRegistro> -->
    <!-- <RegistroCitas></RegistroCitas> -->
    <Header></Header>
    <router-view></router-view>
</template>

<script lang="ts" setup>

import Header from './layout/Header.vue';
import FormRegistro from './views/FormRegistro.vue';
import DatosRegistro from './views/DatosRegistro.vue';
import DescargarQR from './views/DescargaQR.vue';
import RegistroCitas from './views/RegistroCitas.vue';
import Sidebar from './layout/Sidebar.vue';
</script>
<!-- <script src="https://unpkg.com/vue@3.0.5"></script> -->
<!-- <script src="https://unpkg.com/bootstrap-icons-vue@0.5.0"></script> -->
<style></style>
