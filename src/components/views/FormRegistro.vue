<template>
    <b-form>
        <b-row  >
            <b-col>
                <template  lg="4"  v-for="block in content.body">
                    <component :is="block.component" :block="block"></component>
                </template>

            </b-col>
        </b-row>
    </b-form>
</template>


<script>
import Bar from "../Bar";
import Foo from "../Foo";
import input_text from "../input_text"

export default {
    data() {
        return {
            content: {
                body: [
                    { component: input_text, type: 'text', label: 'Nombre' },
                    { component: input_text, type: 'text', label: 'Apellido Paterno' },
                    { component: input_text, type: 'text', label: 'Apellido Materno' },
                    { component: input_text, type: 'text', label: 'Procedencia' },
                    { component: input_text, type: 'text', label: 'Asunto' },
                    { component: input_text, type: 'tel', label: 'Contacto' },
                    { component: input_text, type: 'select', label: '¿A quién visita?', options: ['Carrots', 'Beans', 'Tomatoes', 'Corn'] },
                    { component: input_text, type: 'text', label: 'Área o visita?' },
                    { component: input_text, type: 'number', label: 'Extensión' },
                    { component: input_text, type: 'datepicker', label: 'Fechas disponibles' },
                    { component: input_text, type: 'timepicker', label: 'Hora' }
                ]
            }
        };
    },
    name: "App",
    components: {
        Bar,
        Foo
    }
};
</script>
    
<!-- <script lang="ts" setup>

import input_text from '../input_text.vue';
import Foo from "../Foo.vue";
import Bar from "../Bar.vue";

var nombre, paterno, materno, fecha, hora, org_inst, asunto, contacto, personal, area, extension;
var show = true;

const components:any = {
    Bar,
    Foo
  }

const  body:any = [
        {
            uid: "BUY6Drn9e1",
            component: "foo",
            headline: "Foo"
        },
        {
            _uid: "gJZoSLkfZV",
            component: "bar",
            title: "Bar"
        },
        {
            _uid: "X1JAfdsZxy",
            component: "foo",
            headline: "Another headline"
        }
    ]

const types: any = [
    { component: input_text, type: 'text', label: 'Nombre' },
    { component: input_text, type: 'text', label: 'Apellido Paterno' },
    { component: input_text, type: 'text', label: 'Apellido Materno' },
    { component: input_text, type: 'text', label: 'Procedencia' },
    { component: input_text, type: 'text', label: 'Asunto' },
    { component: input_text, type: 'tel', label: 'Contacto' },
    { component: input_text, type: 'select', label: '¿A quién visita?', options: ['Carrots', 'Beans', 'Tomatoes', 'Corn'] },
    { component: input_text, type: 'text', label: 'Área o visita?' },
    { component: input_text, type: 'number', label: 'Extensión' },
    { component: input_text, type: 'datepicker', label: 'Fechas disponibles' },
    { component: input_text, type: 'timepicker', label: 'Hora' }
]


form_registro_cita: [
    nombre = '',
    paterno = '',
    materno = '',
    fecha = null,
    hora = null,
    org_inst = '',
    asunto = '',
    contacto = '',
    personal = '',
    area = '',
    extension = '',
]



foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn']

const onSubmit = (e): void => {
    e.preventDefault()
}
const onReset = (e): void => {
    nombre = ''
}
</script> -->
    
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
    