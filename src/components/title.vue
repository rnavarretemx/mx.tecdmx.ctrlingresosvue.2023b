<template>
    <b-col :sm="`${block.sm}`" :md="`${block.md}`" :lg="`${block.lg}`" >
        <div class="title">
            <h3> {{ block.label }} </h3>
        </div>
    </b-col>
</template>

<script lang="ts">
export default {
    props: {
        block: Object
    },
    name: "title"
};

</script>

<style scoped>

.title{
    /* border: solid 1px white; */
   /*  margin-bottom: 0 !important; */
}
div{
    /* margin-bottom: 10px; */
}
.title {
    /* padding-top: 2em; */
    /* padding-bottom: 1em; */
    padding: 16px;
    text-align: center;
}

.title h3 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 2px;
}

</style>
