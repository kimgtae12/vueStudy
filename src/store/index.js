import { createStore } from "vuex";
import { Counter } from "./modules/Counter";
import { moduleA } from "./modules/moduleA";

export default createStore({
    modules:{Counter,moduleA}
});