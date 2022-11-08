<template>
    <div>
        <h2>게시판 리스트</h2>
        <table class="board-wrapper">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list of boardList" :key="list.idx">
                    <td>{{list.idx}}</td>
                    <td>{{list.title}}</td>
                    <td>{{list.writer}}</td>
                    <td>{{list.wdate}}</td>
                    <input type="radio" @click="selectChange(list.idx)" name="selIdx" v-model="selectIdx" :checked="list.idx == 1 ? true : false" :value="list.idx" />
                </tr>
            </tbody>
        </table>
        <div class="board-button-wrapper">
            <button>
                <router-link :to="{path:'/board/edit', params: {name: 'dog', age:4}}">
                    게시글 추가
                </router-link>
            </button>
            <button>게시글 수정</button>
        </div>
    </div>
</template>

<script>

import {computed,reactive,ref,watch, watchEffect} from 'vue';
import {useStore} from 'vuex';

export default {
    name:'boardList',
    setup(){
        const store = useStore();

        const boardList = computed(()=> store.state.VuexBoardList.list).value;
        // const doubleCount = computed(()=>store.getters["moduleA/doubleCount"]);
        // const inc = () => store.commit("moduleA/increment");

        const selectIdx = ref(1);
        return {
            boardList,
            selectIdx,
        }
    },
    
}
</script>

<style scoped>
.board-wrapper{
    margin:0 auto;
}
.board-wrapper thead tr{
    border-bottom:1px solid red;
}
.board-button-wrapper{
    margin:0 auto;
    margin-top:2rem;
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap:1rem;
}
</style>