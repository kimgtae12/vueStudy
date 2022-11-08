import { createStore } from "vuex";
import { Counter } from "./modules/Counter";
import { VuexBoardList } from "./modules/VuexBoardList";

export default createStore({
    modules:{Counter,VuexBoardList}
});