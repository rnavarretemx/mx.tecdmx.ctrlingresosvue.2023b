<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`">
        <div class="button_primary">
            <b-button size="lg" variant="outline-primary">{{ block.label }}</b-button>
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
    /* border: solid 1px red; */
    text-align: center;
   /*  margin-bottom: 10px; */
}

.button_primary button{
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 20px;
}
</style>
