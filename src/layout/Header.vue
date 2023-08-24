<template>
  <b-navbar toggleable type="dark" variant="info">
    <b-row class="w-100">

      
        <b-col sm="12" md="4" lg="3" class="col-div">
          <b-navbar-brand>
            <img class="img_tecdmx" src="../assets/tribunal_logo.png" alt="">
          </b-navbar-brand>
        </b-col>

        <b-col sm="0" md="8" lg="9" class="col-div">
          <template v-for="json_data in comp_navbar.body">
            <component :is="json_data.component" :block="json_data"></component>
          </template>
          &nbsp;
        </b-col>
        

    </b-row>
  </b-navbar>
</template>

<script lang="ts">
import title from "../components/title.vue"
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
};
</script>
  
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.navbar_header{
  /* display: flex; */
  border: solid 1px yellow;
}
.col-div{
  border: solid 2px rgb(0, 255, 255);
  padding: 0 !important;
}

.navbar {
  background: #eceff1 !important;
  padding: 0 !important;
}

.row {
  margin: 0;
  /* padding: 0 !important; */
  border: solid 2px red;
}

.col-div:first-child {
  padding: 10px;
  background: #75096C;
  text-align: center;
}

.col-div:nth-child(2){
  padding-bottom:0 !important;
}

.navbar-brand img {
  height: 100%;
  width: 135px;
}
</style>
  