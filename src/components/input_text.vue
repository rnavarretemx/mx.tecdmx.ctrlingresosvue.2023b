<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`">
        <div class="input_text">
            <label :for="`${block.id}`"> {{ block.label }} </label>
            <b-form-input 
            :type="block.type"
            :placeholder="`${block.placeholder}`" 
            :id="`${block.id}`" 
            :required=block.required
            :readonly=block.disabled
            >
            </b-form-input>
        </div>
    </b-col>
</template>

<!-- v-model = "props.txt_model" 
    txt_model: String,-->

<script lang="ts">
export default {
    name: "input_text"
};

</script>

<script lang="ts" setup>
const props = defineProps({
    block: Object,
});
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
