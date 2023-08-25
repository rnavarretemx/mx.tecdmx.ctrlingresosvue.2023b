<template>
    <Header titulo_navbar="Registro de ingreso"></Header>
    <b-container>
        <b-form @submit="onSubmit">
            <b-row>
                <template v-for="json_data in form_registro.body">
                    <component :is="json_data.component" :block="json_data"></component>
                </template>
            </b-row>

            <!-- <div class="button_primary">
                <b-button size="lg" variant="outline-primary">GUARDAR</b-button>
            </div>
            <b-button type="submit" variant="primary">Submit</b-button> -->
        </b-form>
    </b-container>
</template>


<script lang="ts">
/* import navbar_header from "../components/header.vue" */
import Header from '../layout/Header.vue';
import title from "../components/title.vue"
import subtitle from "../components/subtitle.vue"
import input_text from "../components/input_text.vue"
import input_select from "../components/input_select.vue"
import input_datepicker from "../components/input_datepicker.vue"
import input_timepicker from "../components/input_timepicker.vue"
import button_primary from "../components/button_primary.vue"

import router from '@/router';

const form_registro = require('../json/form_registro.json');

export default {
    data() {
        return {
            form_registro
        };
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            /* alert("hola"); */
             router.push("/cita")
            /* router.push({ path: '/cita', replace: true }) */
        }
    },
    name: "form_registro",
    components: {
        /*  navbar_header, */
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

/* const onSubmit = (e): void => {
   e.preventDefault()
   alert("hola");
  alert(JSON.stringify(this.form)) 
}*/
</script>
    
<style scoped>
.container {
    padding: 50px;
}

/* .titulo_uno {
    padding-top: 2em;
    padding-bottom: 1em;
}

.titulo_uno h3 {
    font-size: 40px;
} */
</style>
    