<template>
  <!-- <nav class="navbar">

    <div class="row w-100">
      <div class="col-sm-12 col-md-4 col-lg-3 text-center">

        <a class="navbar-brand" href="#">
          <img src="../../assets/tribunal_logo.png" alt="" width="135" height="40">

          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i
              class="bi bi-three-dots"></i></button>
        </a>

      </div>
      <div class="col-sm-0 col-md-8 col-lg-9">

      </div>
    </div>
  </nav> -->
  <b-navbar toggleable type="dark" variant="info">
    <b-row class="w-100">

      <b-col sm="12" md="4" lg="3">
        <b-navbar-brand>
          <img class="img_tecdmx" src="../assets/tribunal_logo.png" alt="">
          <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i
              class="bi bi-three-dots"></i></button> -->
        </b-navbar-brand>
      </b-col>

      <b-col sm="0" md="8" lg="9">

        <!-- <b-navbar-toggle target="navbar-toggle-collapse" >
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up" style="color:#fff; font-size:28px;"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Link 1</b-nav-item>
            <b-nav-item href="#">Link 2</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse> -->
      </b-col>
    </b-row>
  </b-navbar>
</template>
  
<script lang="ts" setup>


</script>
  
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.navbar {
  background: #eceff1 !important;
  padding: 0 !important;
}

.row {
  margin: 0;
}


.row div:first-child {
  padding: 10px;
  background: #75096C;
  text-align: center;
}

.navbar-brand img {
  height: 100%;
  width: 135px;
}

/* 
.btn {
  background: #75096C;
  border: none;
  display: flex;
  float: right;
}

.btn:hover {
  background: #75096C;
}

.btn i {
  font-size: 18px;
} */
</style>
  