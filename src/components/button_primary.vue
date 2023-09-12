<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`">
        <div class="button_primary">
            <!-- <b-button size="lg" :type="block.type" >{{ block.label }}</b-button> -->
            <button :type="block.type" class="btn btn-primary btn_guardar">{{ block.label }}</button>
        </div>
    </b-col>
</template>

<script lang="ts">
export default {
    props: {
        block: Object
    },
    name: "button_primary"
};

</script>

<style scoped>
.button_primary {
    text-align: center;
}

.button_primary button{
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 20px;
}
</style>
