<template>
    <Header titulo_navbar="Datos de ingreso"></Header>
    <b-container>
        <b-form>
            <b-row>
                <template v-for="json_data in form_data.body">
                    <component :is="json_data.component" :block="json_data"></component>
                </template>
            </b-row>

            <b-row>
                <!--  -->

                <!--  -->
            </b-row>
        </b-form>
    </b-container>
</template>
    
<script lang="ts">
import Header from '../layout/Header.vue';
/* import { ref } from 'vue'; */
import Sidebar from '../layout/Sidebar.vue'
import title from "../components/title.vue"
import subtitle from "../components/subtitle.vue"
import input_text from "../components/input_text.vue"
import input_select from "../components/input_select.vue"
import input_datepicker from "../components/input_datepicker.vue"
import input_timepicker from "../components/input_timepicker.vue"
import button_primary from "../components/button_primary.vue"

const form_data = require('../json/form_ingreso.json');
/* import componentes from "../json/imp_componentes.vue";
var componentes_2 = componentes.components;
console.log(JSON.stringify(componentes_2)); */

export default{
    data() {
        return {
            form_data
        };
    },
    components:{
        Header,
        title,
        subtitle,
        input_text,
        input_select,
        input_datepicker,
        input_timepicker,
        button_primary
    }
};

</script>
    
<style scoped>

.container{
padding: 50px;
}
/* div {
    border: solid 1px red;
}
 */

/* .container {
    border: solid 1px red;
} */

/* .titulo_uno {
    padding-top: 2em;
    padding-bottom: 1em;
}

.titulo_uno h3 {
    font-size: 40px;
} */
</style>
    