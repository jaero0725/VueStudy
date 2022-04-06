<template>
    <div>
        <h5>{{blogs[0].title}}</h5>
        <p>{{blogs[0].content}}</p>
    </div>
    <div>
        <h5>{{blogs[1].title}}</h5>
        <p>{{blogs[1].content}}</p>
    </div>
    <div>
        <h5>{{blogs[2].title}}</h5>
        <p>{{blogs[2].content}}</p>
    </div>
</template>
  
  <script>
  
  export default {
    name: 'TheList',
    props:{
        blogs :  Object //데이터 형식
    },
  }
  </script>
  
  <style>
    

  </style>
  