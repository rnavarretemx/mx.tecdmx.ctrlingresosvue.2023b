<template>
  <b-navbar toggleable type="dark" variant="info">
    <b-row class="w-100">

      <b-col sm="12" md="5" lg="3" class="col-div">
        <b-navbar-brand>
          <img class="img_tecdmx" src="../assets/tribunal_logo.png" alt="">
        </b-navbar-brand>
      </b-col>

      <b-col sm="8" md="4" lg="7" class="col-div">
        <!-- <template v-for="json_data in comp_navbar.body">
            <component :is="json_data.component" :block="json_data"></component>
          </template> -->
        <h3> {{ titulo_navbar }}</h3>

      </b-col>

      <b-col sm="4" md="3" lg="2" class="col-div">
        <!-- &nbsp; -->
        <b-button  variant="outline-secondary"  v-b-toggle.sidebar-1>
          <i class="bi bi-list"></i>
        </b-button>
        <!-- <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample">
          <i class="bi bi-list"></i>
        </button> -->
      </b-col>

    </b-row>
  </b-navbar>
  <Sidebar></Sidebar>
</template>

<script lang="ts">
import Sidebar from '../layout/Sidebar.vue';

export default {
  props: {
    titulo_navbar: String
  },
  components: {
    Sidebar
  }
}
/* import title from "../components/title.vue"
const comp_navbar = require('../json/navbar_header.json');

export default {
  data() {
        return {
          comp_navbar
        };
    },
  name: "navbar_header",
  components:{
    title
  }
}; */

</script>
  
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.navbar_header {
  /* display: flex; */
  border: solid 1px yellow;
}

.col-div {
  /* border: solid 2px rgb(0, 255, 255); */
  padding: 0 !important;
}

.navbar {
  background: #eceff1 !important;
  padding: 0 !important;
}

.row {
  margin: 0;
  /* padding: 0 !important; */
  /* border: solid 2px red; */
}

.col-div:first-child {
  padding: 10px !important;
  background: #690061;
  text-align: center;
}

.col-div:nth-child(2),
.col-div:nth-child(3) {
  padding: 16px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .col-div:nth-child(3){
  display: flex;
  justify-content: center;
  align-items: center;
}
 */
.col-div:nth-child(2) h3 {
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 2px;
}

.navbar-brand img {
  height: 100%;
  width: 135px;
}
</style>
  