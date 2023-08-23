<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`">
        <div class="input_datepicker">
            <label :for="`${block.id}`"> {{ block.label }} </label>
            <!-- <b-form-input :placeholder="`${block.placeholder}`"></b-form-input> -->
            <b-form-datepicker :id="`${block.id}`"></b-form-datepicker>
        </div>
    </b-col>
</template>

<script lang="ts">
export default {
    props: {
        block: Object
    },
    name: "input_datepicker"
};

</script>

<style scoped>
div{
    margin-bottom: 10px;
    /* border: solid 1px blue; */
}
div label{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}
</style>
