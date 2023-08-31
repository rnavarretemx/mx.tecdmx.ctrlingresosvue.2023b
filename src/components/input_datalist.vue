<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`">
        <label :for="`${block.id}`"> {{ block.label }} </label>
        <b-form-input 
        :list="`${block.id}`" 
        :id="`${block.id}_input`" 
        @change="selectedItem($event)">
        </b-form-input>
        <datalist :id="`${block.id}`">
            <option v-for="o in block.options" :value="o.value">{{ o.text }}</option>
        </datalist>
    </b-col>
</template>

<!-- @input="selectedItem(2)" :value="o.id" :value="o.value"-->

<script lang="ts" >  
export default {
    name: "input_datalist"
}
</script >

<script lang="ts" setup>
const props = defineProps({
    block: Object,
});

const emit = defineEmits(['onSelectedItem'])

const selectedItem = (e) => {
    emit('onSelectedItem',e);
    /* alert(e); */
}
</script>

<style scoped>
div {
    margin-bottom: 10px;
}

div label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}
</style>
