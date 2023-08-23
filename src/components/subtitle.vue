<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`" >
        <div class="subtitle">
            <h3> {{ block.label }} </h3>
        </div>
    </b-col>
</template>

<script lang="ts">
export default {
    props: {
        block: Object
    },
    name: "subtitle"
};

</script>

<style scoped>

div{
    margin-bottom: 10px;
}
.subtitle {
    /* padding-top: 2em; */
    /* padding-bottom: 1em; */
    text-align: left;
}

.subtitle h3 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
}
</style>
