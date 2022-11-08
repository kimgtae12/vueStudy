export const VuexBoardList = {
    namespaced : true,
    state: ()=>({list:[
        {idx:1,title:'제목1',writer:'경태1',wdate:'2022-11-02'},
        {idx:2,title:'제목2',writer:'경태2',wdate:'2022-11-03'},
        {idx:3,title:'제목3',writer:'경태3',wdate:'2022-11-04'},
        {idx:4,title:'제목4',writer:'경태4',wdate:'2022-11-05'},
        {idx:5,title:'제목5',writer:'경태5',wdate:'2022-11-06'},
    ]}),
    mutations: {
        changeTitle(state,params){
            state.list[params.idx].title = params.title;
        },
        changeWriter(state){

        },
        changeWdate(state){

        },
    },
    getters:{
        doubleCount(state, getters, rootState){
            // return state.counter * 2;
        }
    },
    actions:{
        other({dispatch}){
            console.log('action!!');
            // dispatch("globalAction",null,{root:true});
        }
    }
}