<template sm="4" md="6" lg="4">
    <div class="input_text">
        <label :for="`type-${block}`"> {{ block.label }} </label>
        <b-form-input placeholder="input_text"></b-form-input>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        block: Object
    },
    name: "input_text"
};

</script>

<style scoped></style>
