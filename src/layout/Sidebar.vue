<template>
    <div class="offcanvas offcanvas-start  " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">&nbsp;</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <button type="button" class="btn btn-outline-light">
                 <i class="bi bi-calendar-plus-fill"></i> Registro</button>
            <button type="button" class="btn btn-outline-light"> <i class="bi bi-calendar3"></i> Calendario</button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>

</script>
    
<style scoped>
.offcanvas {
    background: #75096C;
    width: 15em !important;
}

/* .offcanvas-header { border: solid 1px blue; }
.btn-close { border: solid 1px red; } */

.offcanvas-body button {
    width: 90%;
    margin: 10px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
}
.offcanvas-body button{
    text-align: left;
}
.offcanvas-body button i{
  font-size: 20px;
}
</style>
    