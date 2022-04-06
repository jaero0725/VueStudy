//router 설정관련 js 파일

//import {라우터생성도와주는 createRouter}from '라이브러리명' 
//vue-router 설정 코드 

import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';

const routes = [
  {
    path: "/list",  //이경로로 접속을 하면
    component: List.vue, //이 컴포넌트를 보여주세요.
  },
  {
    path: "/list",  //이경로로 접속을 하면
    component: List.vue, //이 컴포넌트를 보여주세요.
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 