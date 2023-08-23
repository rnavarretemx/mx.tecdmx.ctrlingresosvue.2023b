<template>
    <b-container>
        <b-form>
            <b-row>

                <template v-for="json_data in form_registro.body">
                    <component :is="json_data.component" :block="json_data"></component>
                </template>
            </b-row>
        </b-form>
    </b-container>
</template>


<script lang="ts">
import input_text from "../components/input_text"
import input_select from "../components/input_select"
import input_datepicker from "../components/input_datepicker"
import input_timepicker from "../components/input_timepicker"

const form_registro = require('../json/form_registro.json');


/* let select_options = [
    { id: "1172", nombre: "Jhon Doe" },
    { id: "1172", nombre: "Jhon Doe" }
]; */

export default {
    data() {
        return {
            form_registro
        };
    },
    name: "form_registro",
    components: {
        input_text,
        input_select,
        input_datepicker,
        input_timepicker
    }
};
</script>
    
<style scoped>
.row {
    border: solid 1px red;
}

.col {
    border: solid 5px blue;
}

.titulo_uno {
    padding-top: 2em;
    padding-bottom: 1em;
}

.titulo_uno h3 {
    font-size: 40px;
}
</style>
    