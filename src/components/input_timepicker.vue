<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`">
        <div class="input_timepicker">
            <label :for="`${block.id}`"> {{ block.label }} </label>
            <!-- <b-form-input :placeholder="`${block.placeholder}`"></b-form-input> -->
            <b-form-timepicker locale="en"
            @input="selectedTime($event)" ></b-form-timepicker>
        </div>
    </b-col>
</template>

<script lang="ts">
export default {
    name: "input_timepicker"
};

</script>
<script lang="ts" setup>
const props = defineProps({
    block: Object,
});

const emit = defineEmits(['onSelectedTime'])
const selectedTime = (e) => {
    emit('onSelectedTime',e);
    /* alert(e); */
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
