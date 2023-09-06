<template>
    <Header titulo_navbar="Datos del ingreso"></Header>
    <!-- <Sidebar></Sidebar> -->

    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 text-center titulo_uno">
                <h5>El registro de su visita se ha generado con el siguiente c&oacute;digo QR.</h5>
            
                <!-- {{"data: "+ data_o.message}} -->

            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 text-center img_qr">
                <img src="../assets/qr-code.webp" alt="">
                <h6>C&oacute;digo generado: <span>6876aomfj897345sdfk125</span></h6>
            </div>
        </div>

        <div class="row text-center">
            <div class="col-sm-6 col-md-6 col-lg-6 text-center">
                <h6>Nombre del visitante</h6>
                <h6 class="txt_dato">Jhon Doe</h6>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 text-center">
                <h6>Fecha y hora de la cita</h6>
                <h6 class="txt_dato">26/08/2023</h6>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 text-center div_botones">
                <!-- <button class="btn btn-outline-secondary col-sm-12 col-md-12 col-lg-5" data-bs-toggle="modal"
                    data-bs-target="#modal_equipo" type="button">¿Necesitas registrar
                    equipo de c&oacute;mputo?</button> -->
                    <b-button variant="outline-secondary" v-b-modal.modal-equipo :sm="12" :md="12" :lg="5">¿Necesitas registrar
                    equipo de c&oacute;mputo?</b-button>

                <!-- <button class="btn btn-outline-secondary col-sm-12 col-md-12 col-lg-5" data-bs-toggle="modal"
                    data-bs-target="#modal_auto" type="button">¿Necesitas registrar
                    autom&oacute;vil?</button> -->

                    <b-button variant="outline-secondary" v-b-modal.modal-automovil :sm="12" :md="12" :lg="5">¿Necesitas registrar
                        autom&oacute;vil?</b-button>

            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                <button class="btn btn-outline-danger btn-lg col-lg-4" type="button" @click="descargarQR()">DESCARGAR QR</button>
            </div>
        </div>

        <br>


        <!-- <ModalEquipo></ModalEquipo>
        <ModalAutomovil></ModalAutomovil> -->


    </div>
</template>
    
<script lang="ts" setup>
import Header from '../layout/Header.vue';
/* import Sidebar from '../layout/Sidebar.vue'; */
/* import ModalEquipo from '../layout/ModalEquipo.vue';
import ModalAutomovil from '../layout/ModalAutomovil.vue'; */
import { ref, onBeforeMount, onMounted } from "vue";
import router from '@/router';
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
    data_o: Object,
    otro2: String,
  
});






const route = useRoute();
const ingreso = ref();

const getData = async () => {
    console.log(route.params);
    ingreso.value = route.params;
    console.log(ingreso);
    /* console.log(route.params.data_); */
    /* try {
        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
        );
        pokeSprite.value = data.sprites.front_default;
    } catch (error) {
        console.log(error);
        pokeSprite.value = null;
    } */
};

/* getData(); */
onMounted(  () => {
    console.log(route.name);
    console.log(route.params.registro);

    /* console.log(route.params); */
    /* console.log(JSON.parse(route.name)); */
    /* console.log(JSON.parse(route.params.ingreso)); */
    /* console.log(JSON.stringify(route.params.ingreso)); */
    /* console.log(route.data_o); */
    /* console.log(route.name);
    console.log(route.params); */
    /* $route.params.registro */
    /* ingreso.value = route.params.registro;
    console.log(ingreso); */
});

const descargarQR=():void => {
    router.push("/")
}

</script>
    
<style scoped>

.container{
padding: 50px;
}
.titulo_uno {
    padding-top: 2em;
    padding-bottom: 1em;
}

.titulo_uno h3 {
    font-size: 40px;
}

.img_qr img {
    width: 12em;
}

.div_botones {
    padding: 2em;
}

.div_botones button {
    margin: 10px;
}

.txt_dato {
    font-weight: 400;
}
</style>
    