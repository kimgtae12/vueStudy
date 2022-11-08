<template>
    <div>
        <h2>게시판  {{selectIdx}} 수정</h2>
        <div>
            <label>제목 : {{$route.params.name}}</label>
            <!-- <input type="text" v-model="selectInfo.title"/> -->
            <button @click="titleChange">수정</button>
        </div>
        <div>
            <label>작성자 : </label>
            <!-- <input type="text" v-model="selectInfo.writer"/> -->
            <button>수정</button>
        </div>
        <div>
            <label>작성일 : </label>
            <!-- <input type="text" v-model="selectInfo.wdate"/> -->
            <button>수정</button>
        </div>
    </div>
</template>

<style scoped>
</style>

<script>
import { reactive } from 'vue';


export default {
    // name:'boardEdit',
    // setup(){

    //     const routes = [{

    //     }]

    //     console.log($route.params.selectIdx);
    //     const selectInfo = reactive({
    //         title : boardList[selectIdx.value-1].title,
    //         writer : boardList[selectIdx.value-1].writer,
    //         wdate : boardList[selectIdx.value-1].wdate,
    //     })


    //     const selectChange = (idx) => {
    //         selectInfo.title = boardList[idx-1].title;
    //         selectInfo.writer = boardList[idx-1].writer;
    //         selectInfo.wdate = boardList[idx-1].wdate;
    //     }

    //     const titleChange = () => {
    //         store.commit("VuexBoardList/changeTitle",{
    //             title:selectInfo.title, 
    //             idx:selectIdx.value-1
    //         });
    //     }

    //     return {
    //         selectInfo,
    //         selectChange,
    //         titleChange,
    //     }
    // }
}
</script>
