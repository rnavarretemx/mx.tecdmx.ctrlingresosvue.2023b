<template>
  <b-navbar toggleable type="dark" variant="info">
    <b-row class="w-100">

      <b-col sm="12" md="4" lg="3">
        <b-navbar-brand>
          <img class="img_tecdmx" src="../assets/tribunal_logo.png" alt="">
        </b-navbar-brand>
      </b-col>

      <b-col sm="0" md="8" lg="9">
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
  