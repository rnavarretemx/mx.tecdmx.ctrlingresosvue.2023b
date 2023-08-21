<template>
  <nav class="navbar">
      
      <div class="row w-100">
        <div class="col-sm-12 col-md-4 col-lg-3 text-center">
          
          <a class="navbar-brand" href="#"> 
        <img src="../../assets/tribunal_logo.png" alt="" width="135" height="40"> 
        
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"><i class="bi bi-three-dots"></i></button>
      </a>
      
        </div>
        <div class="col-sm-0 col-md-8 col-lg-9"> 
          
        </div>
      </div>
  </nav>
</template>
  
<script lang="ts" setup>


</script>
  
<style scoped>
*{
  margin: 0;
  padding: 0;
}

.navbar{
  background: #eceff1 !important;
  padding-bottom: 0;
  padding-top: 0;
}

.row div:first-child{
  padding: 10px;
   background: #75096C;
}

.navbar-brand img{
  height: 100%;
  margin: 2px;
}

.btn{
    background: #75096C;
    border: none;
    display: flex;
  float: right;
 }

 .btn:hover{
    background: #75096C;
 }

 .btn i{
  font-size: 18px;
 }



</style>
  