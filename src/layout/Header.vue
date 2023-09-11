<template>
  <b-navbar>
    <b-row class="w-100">

      <b-col cols="6" sm="6" md="5" lg="3" class="col-div">

        <b-navbar-brand >
          <img class="img_tecdmx" src="../assets/images/tribunal_logo.png" alt="" @click="routerInicioSesion()">
        </b-navbar-brand>
        <div>
          <button class="btn" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <i class="bi bi-list"></i>
          </button>
        </div>


      </b-col>

      <b-col cols="6" sm="6" md="7" lg="9" class="col-div">

        <h3> {{ encabezado }}</h3>

      </b-col>

      <!--<b-col cols="3" sm="4" md="3" lg="2" class="col-div">
        
         v-b-toggle.offcanvasExample -->
      <!-- <b-button  variant="outline-secondary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
          <i class="bi bi-list"></i>
        </b-button> 

      </b-col>-->

    </b-row>
  </b-navbar>
  <Sidebar></Sidebar>
</template>

<script lang="ts" setup>
import Sidebar from '../layout/Sidebar.vue';
import router from '@/router';
const props = defineProps({
  encabezado: String

});

const routerInicioSesion = (): void  => {
  router.push("/")
}


</script>
  
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.navbar {
  /* background: #eceff1 !important; */
  background: #690061 !important;
  padding: 0 !important;
}

.row {
  margin: 0;
}

.col-div:first-child button {
  display: flex;
  float: right;
  color: white;
}

.col-div:first-child {
  padding: 10px !important;
  /* background: #690061; */
  text-align: center;
  display: flex;

}

.col-div:first-child div:first-child {
  width: 90%;
}

.col-div:first-child div:nth-child(2){
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.col-div:nth-child(2) {
  padding: 16px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.col-div:nth-child(2) h3 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
}

.navbar-brand img {
  height: 100%;
  width: 135px;
  cursor: pointer;
}

@media screen and (max-width: 620px) {
  .col-div:nth-child(2) h3 {
    font-size: 18px;
  }

  .navbar-brand img {
  width: 90px;
}
}
</style>
  