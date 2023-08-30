<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`">
        <div class="input_text">
            <label :for="`${block.id}`"> {{ block.label }} </label>
            <b-form-input 
            :placeholder="`${block.placeholder}`" 
            :id="`${block.id}`" 
            :readonly=block.disabled>
            <!-- {{ block.id }} v-model="block.id" -->
            </b-form-input>
        </div>
    </b-col>
</template>

<script lang="ts">
export default {
    props: {
        block: Object
    },
    name: "input_text"
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
