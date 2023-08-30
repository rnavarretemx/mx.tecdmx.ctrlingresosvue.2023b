<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`">
        <div class="input_select">
            <label :for="`${block.id}`"> {{ block.label }} </label>
            <select class="form-select">
                <!-- <option selected>Seleccione al personal</option> -->
                <option v-for="option in block.options" :value="option.value">{{ option.text }}</option>
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
