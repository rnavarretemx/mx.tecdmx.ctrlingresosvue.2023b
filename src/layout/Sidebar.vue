<template>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
            <div class="img_tecdmx">
                <img src="../assets/tribunal_logo.png" alt="">
            </div>

            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <button type="button" class="btn btn-outline-light" @click="navegaVigilancia">
                <i class="bi bi-calendar-event"></i> Citas </button>
            <!-- <button type="button" class="btn btn-outline-light"> <i class="bi bi-calendar3"></i> Calendario</button> -->
            <button type="button" class="btn btn-outline-light" @click="navegaRegistro()">
                <i class="bi bi-calendar"></i> Registro cita</button>
        </div>
    </div>
    <!--  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">&nbsp;</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <button type="button" class="btn btn-outline-light">
                 <i class="bi bi-calendar-plus-fill"></i> Registro</button>
            <button type="button" class="btn btn-outline-light"> <i class="bi bi-calendar3"></i> Calendario</button>
        </div> 
    </div>-->
    <!-- <b-sidebar id="sidebar-1" title="Menú" bg-variant="secondary" class="bg_sbar" shadow>

        <button type="button" class="btn btn-outline-light" @click="navegaRegistro()"><i
                class="bi bi-calendar-plus-fill"></i> Registro</button>
        <button type="button" class="btn btn-outline-light"> <i class="bi bi-calendar3"></i> Calendario</button>

    </b-sidebar> -->
</template>

<script lang="ts" setup>
import router from '@/router';

const navegaRegistro = (): void => {
    router.push("/registro")
}

const navegaVigilancia = (): void => {
    router.push("/agenda")
}


</script>
    
<style scoped>
.offcanvas {
    background-color: #690061 !important;
    width: 20em !important;
}

.img_tecdmx {
    width: 100%;
    text-align: center;
    /* border: solid 1px cyan; */
}

.offcanvas-header img {
    height: 100%;
    width: 135px;
    /* border: solid 1px yellow; */

}

/* .offcanvas-header button{
    border: solid 1px blue;
}
 */
/* .bg_sbar button {
    width: 90%;
    margin: 10px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    background: #FF8200;
} */

.offcanvas-body button {
    /* text-align: left; */
    width: 90%;
    margin: 10px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    background: #690061;
    text-align: left;
}

.offcanvas-body button i {
    padding-right: 10px;
}

/* .offcanvas-body button i {
    font-size: 20px;
} */
</style>
    