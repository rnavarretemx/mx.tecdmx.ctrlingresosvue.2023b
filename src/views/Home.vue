<template>
    <div class="container c_login">

        <div class="row r_login col-lg-12">
            <div class="subcontainer sc_login col-12 col-sm-12 col-md-12 col-lg-6">
               <!--  <h2>Sistema de gestión de ingreso al TECDMX</h2> -->
            </div>
            <div class="subcontainer sc_login col-12 col-sm-12 col-md-12 col-lg-6">
                <form class="d_form col-lg-8" @submit.prevent="onSubmit">

                    <div class="input-group div_img">
                        <img class="img_tecdmx" src="../assets/images/tribunal_logo.png" alt="">
                    </div>

                    <div class="input-group">
                        <span class="input-group-text" id="addon-wrapping">
                            <i class="bi bi-person-circle"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Username"
                            aria-describedby="addon-wrapping">
                    </div>

                    <div class="input-group">
                        <span class="input-group-text" id="addon-wrapping">
                            <i class="bi bi-lock-fill"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="********" aria-label="Username"
                            aria-describedby="addon-wrapping">
                    </div>

                    <button type="submit" class="btn btn-primary">Ingresar</button>



                </form>
            </div>
        </div>



    </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import router from '@/router';

const emit = defineEmits(['getEncabezado']);

onBeforeMount(() => {
    setEncabezado("Inicio de sesión");
});

const setEncabezado = (etq) => {
    emit('getEncabezado', etq);
}

const onSubmit = async (e) => {
    //Métodos para el inicio de sesión
}
</script>

<style scope>
.c_login {
    /* border: solid 1px red; */
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

.r_login {
    height: 80%;
}

/* .sc_login {
    border: solid 1px blue;
} */

/* Estilo del form login (Izquierdo). */
.sc_login:nth-child(1) {
    /* background: #eceff1 !important; */
    border-radius: 20px 0 0 20px;
    padding: 20px;
    background-image: url("../assets/images/bg_cdmx.png");
    background-size: cover;
}

.sc_login:nth-child(1) h2 {
    font-size: 40px;
    font-weight: 800;
    color: #690061;
    text-align: right;
}

/* .sc_login:nth-child(1) span{
    bottom: 0;
    position: absolute;
} */
/* Estilo del form login (Derecho). */
.sc_login:nth-child(2) {
    background: #690061 !important;
    padding: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0 20px 20px 0;
}

.sc_login:nth-child(2) .div_img {
    padding: 10px;
    display: flex;
    justify-content: center;
}

.sc_login:nth-child(2) .img_tecdmx {
    width: 75%;
    margin-bottom: 15px;
}

.sc_login:nth-child(2) .input-group {
    margin-bottom: 10px;
}

.sc_login:nth-child(2) button,
.sc_login:nth-child(2) button:focus {
    width: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    background-color: #FF8200;
    border: none;
}

.sc_login:nth-child(2) button:hover {
    background-color: #ad5f0e;
}

@media screen and (max-width: 990px) {

    .sc_login:nth-child(1) {
        border-radius: 20px 20px 0 0;
    }

    .sc_login:nth-child(2) {
        border-radius: 0 0 20px 20px;
    }
}

@media screen and (max-width: 620px) {

    .r_login {
        padding: 20px;
    }

    .sc_login:nth-child(1) h2 {
        font-size: 30px;
    }
}
</style>