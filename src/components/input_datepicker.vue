<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`">
        <div class="input_datepicker">
            <label :for="`${block.id}`"> {{ block.label }} </label>
            <!-- <b-form-input :placeholder="`${block.placeholder}`"></b-form-input> -->
            <b-form-datepicker 
            :id="`${block.id}`" 
            @input="selectedDate($event)" ></b-form-datepicker>
        </div>
    </b-col>
</template>

<script lang="ts">
export default {
    name: "input_datepicker"
};

</script>

<script lang="ts" setup>
const props = defineProps({
    block: Object,
});

const emit = defineEmits(['onSelectedDate'])

const selectedDate = (e) => {
    emit('onSelectedDate',e);
}

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
