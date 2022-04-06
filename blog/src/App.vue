<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Zeroco Coding</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="https://github.com/jaero0725" target="_blank" >Github</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="https://zeroco.tistory.com" target="_blank">Blog</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- /~로 접속을하면 이자리에 List.vue 에 접속한다. -->
  <router-view></router-view>

  <!-- 블로그 글 List :blog="blog" 로 props 로 보내줌 -->
  <!-- <TheList :blog="blog" v-for="blog in blogs" :key="blog"/> -->
</template>

<script>
// import TheList from './components/List'

import blogs from './assets/blog.js'
export default {
  name: 'App',
  data(){
    return{
      blogs : blogs
    }
  },
  components: {
    TheList : TheList,
  }
}
</script>

<style>
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


<!--
  Vue Router 다운
  > npm install vue-router@4

  실행
  > npm run serve

  main.js 에 작업 

-->