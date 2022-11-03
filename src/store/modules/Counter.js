
export const Counter = {
    state : () => ({counter : 15}),
    mutations: {
        setCounter(state, value){
            state.counter = value;
        }
    },
    action:{
        globalAction:{
            handler({commit}){
                commit("setCounter",199);
            }
        }
    },
    getters:{
        time2(state){
            return state.counter *2;
        }
    }
};