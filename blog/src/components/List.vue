<template>
    <div class="table-responsive-md">
    <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">글번호</th>
            <th scope="col">제목</th>
            <th scope="col">날짜</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(blog, i) in blogs" :key="i">
            <th scope="row">{{blog.number}}</th>
            <td @click="$router.push('/list/'+ i )" :blogs="blogs">{{blog.title}}</td>
            <td>{{blog.date}}</td>
            <td>{{blog.hit}}</td>
          </tr>
        </tbody>
    </table>
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
  