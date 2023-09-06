<template>
    <div class="container c_login">
        <div class="subcontainer sc_login col-lg-4">
            <form class="d_form col-lg-12" @submit.prevent="onSubmit">
                <div class="input-group div_img col-lg-12">
                    <img class="img_tecdmx" src="../assets/tribunal_logo.png" alt="">
                </div>
                <div class="input-group">
                    <span class="input-group-text" id="addon-wrapping">
                        <i class="bi bi-person-circle"></i>
                    </span>
                    <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Username"
                        aria-describedby="addon-wrapping" >
                        <!-- required -->
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
    /* alert("hola"); */

}
</script>

<style scope>

/* body{
    background: #690061 !important;
} */

.c_login {
    /* border: solid 1px red; */
    padding: 20px;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.subcontainer .sc_login{
     /* border: solid 1px blue; */
    background: #690061 !important;
    border-radius: 16px;
    padding: 40px;
    /* margin-top: -120px; */
}

.d_form{
    /* border: solid 1px orange; */
}

.subcontainer .sc_login button{
    width: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    background-color: #FF8200;
}
.subcontainer button:hover{
    /* background-color: #FF8200; */
}
.input-group{
    margin-bottom: 10px;
}

.img_tecdmx{
    width: 15em;
    margin-bottom: 15px;
}

.div_img{
    padding: 10px;
    display: flex;
    justify-content: center;
}
</style>