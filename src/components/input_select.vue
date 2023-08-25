<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`">
        <div class="input_select">
            <label :for="`${block.id}`"> {{ block.label }} </label>
            <!-- <b-form-select v-model="selected"  :options="" :id="`${block.id}`"></b-form-select> -->
            <select class="form-select" aria-label="Default select example">
                <option selected>Seleccione al personal</option>
                <option >Lic. Juan Pérez</option>
                <option >Lic. Diana Susana</option>
                <option v-for="option in select_options" :value="option.id">{{ option.nombre }}</option>
            </select>
        </div>
    </b-col>
</template>

<script lang="ts">
export default {
    props: {
        block: Object
    },
    name: "input_select"
};

</script>

<style scoped>
div{
    margin-bottom: 10px;
}

div label{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}
</style>
