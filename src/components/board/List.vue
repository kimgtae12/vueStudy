<template>
    <div>
        <h2>게시판 리스트</h2>
        <p>{{doubleCount}}</p>
        <button @click="inc">inc</button>

        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
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

        <h2>게시판  {{selectIdx}} 수정</h2>

        <div>
            <label>제목 : </label>
            <input type="text" v-model="selectInfo.title"/>
            <button>수정</button>
        </div>
        <div>
            <label>작성자 : </label>
            <input type="text" v-model="selectInfo.writer"/>
            <button>수정</button>
        </div>
        <div>
            <label>작성일 : </label>
            <input type="text" v-model="selectInfo.wdate"/>
            <button>수정</button>
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

        const boardList = computed(()=> store.state.moduleA.list).value;
        const doubleCount = computed(()=>store.getters["moduleA/doubleCount"]);
        const inc = () => store.commit("moduleA/increment");

        const selectIdx = ref(1); 

        
        const selectInfo = reactive({
            title : boardList[selectIdx.value-1].title,
            writer : boardList[selectIdx.value-1].writer,
            wdate : boardList[selectIdx.value-1].wdate,
        })


        const selectChange = (idx) => {
            selectInfo.title = boardList[idx-1].title;
            selectInfo.writer = boardList[idx-1].writer;
            selectInfo.wdate = boardList[idx-1].wdate;
        }

        return {
            boardList,
            inc,
            doubleCount,
            selectIdx,
            selectInfo,
            selectChange,
        }
    },
    
}
</script>

<style scoped>

</style>