<template>
    <div class="container mt-4">
        {{$route.params.id}}
        <h5>{{blog[$route.params.detailId].title}}</h5>
        <p>{{blog[$route.params.detailId].content}}</p>
        <p>{{blog[$route.params.detailId].date}}</p>
        <p>{{blog[$route.params.detailId].number}}</p>
        <h5 @click="$router.go(-1)">뒤로가기</h5>
    </div>

    

</template>
<script>
    export default {
      name: 'TheDetail',
      mounted() {
          console.log(this.$route.params.detailId); 
      },
      props:{
          blog : Object
      },
    }
</script>
    
<style>
      
  
</style>
    