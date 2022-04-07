//router 설정관련 js 파일

//import {라우터생성도와주는 createRouter}from '라이브러리명' 
//vue-router 설정 코드 

import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './views/Author.vue';
import Comment from './views/Comment.vue';

const routes = [
  {
    path: "/list",  //이경로로 접속을 하면
    component: List, //이 컴포넌트를 보여주세요. List.vue 가 아니고 List로 적어놓아야됨.
    // beforeEnter: (to, from)=>{
    //     return to.fullPath
    // }  
},
  {
    path: "/", 
    component: Home,
    beforeEnter: ()=>{
        //이런식으로 경로들어가기전에 로직 작성가능

      }
  },
  {
    path: '/list/:detailId',
    component: Detail,
    children: [
        {
          path: "author",
          component: Author,
        },
        {
          path: "comment",
          component: Comment,
        }
      ]
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 