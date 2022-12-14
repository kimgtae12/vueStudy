import Vue from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import HelloWorld from '@/components/HelloWorld'; //메인 컴포넌트 호출
import List from '@/components/board/List'; //게시판 리스트 컴포넌트 호출
import ListEdit from '@/components/board/BoardEdit';
const routes = [
    {
        path:'/',
        name:HelloWorld,
        component:HelloWorld
    },{
        path:'/board/list',
        name:List,
        component:List
    },{
        path:'/board/edit',
        name:'ListEdit',
        component : ListEdit,
        props:true,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router