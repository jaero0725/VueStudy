import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router.js'// 라우터 가져옴.
//라우터 세팅을 다른곳에 만들어 놓고 가져오는 방식

createApp(App).use(router).mount('#app')
