<template>
    <div>
        <h5>{{blog.title}}</h5>
        <p>{{blog.content}}</p>
    </div>
</template>
  
  <script>
  
  export default {
    name: 'TheList',
    props:{
        blog :  Object //데이터 형식
    },

  }
  </script>
  
  <style>
    

  </style>
  