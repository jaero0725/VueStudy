<template>
    <div v-for="(blog, i) in blogs" :key="i">
        <h5 @click="$router.push('/list/'+ i )" :blog="blog">{{blog.title}}</h5>
        <p>{{blog.date}}</p>
    </div>

</template>
  
  <script>
  
  export default {
    name: 'TheList',
    props:{
        blogs :  Array//데이터 형식
    },
  }
  </script>
  
  <style>
    

  </style>
  