import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            title: 'this is Vue + Composition API'
        };
    },
    getters: {
        appTitle(state) {
            return state.title.trim();
        }
    }
});

export default store;
