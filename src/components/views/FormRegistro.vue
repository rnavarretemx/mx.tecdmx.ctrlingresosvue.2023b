<template>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-container>
            <b-row class="">

                <!-- <b-col sm="12" md="6" lg="4" v-for="type in types" :key="type">

                    <label :for="`type-${type}`"> {{ type.label }} </label>
                    
                    <b-form-input v-if="!type.options" :id="`type-${type}`" :type="type.type"></b-form-input>
                    <b-form-select v-if="type.options" :options="type.options"></b-form-select>
                </b-col> -->

            </b-row>
        </b-container>

    </b-form>
</template>
    
<script lang="ts" setup>
var nombre, paterno, materno, fecha, hora, org_inst, asunto, contacto, personal, area, extension;
var show = true;

const types: any = [
    { type: 'text', label: 'Nombre' },
    { type: 'text', label: 'Apellido Paterno' },
    { type: 'text', label: 'Apellido Materno' },
    { type: 'text', label: 'Procedencia' },
    { type: 'text', label: 'Asunto' },
    { type: 'tel', label: 'Contacto' },
    { type: 'select', label: '¿A quién visita?', options: ['Carrots', 'Beans', 'Tomatoes', 'Corn'] },
    { type: 'text', label: 'Área o visita?' },
    { type: 'number', label: 'Extensión' },
    { type: 'datepicker', label: 'Fechas disponibles' },
    { type: 'timepicker', label: 'Hora' }
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
</script>
    
<style scoped>
.row {
    border: solid 1px red;
}

.col{
    border: solid 1px blue;
}

.titulo_uno {
    padding-top: 2em;
    padding-bottom: 1em;
}

.titulo_uno h3 {
    font-size: 40px;
}
</style>
    