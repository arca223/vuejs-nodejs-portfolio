import Vue from 'vue';
import Vuex from 'vuex';

import experiences from './modules/experiences';
import skills from './modules/skills';
import stories from './modules/stories';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        route: "home"
    },
    getters: {
        getRoute: (state) => {
            return state.route;
        }
    },
    mutations: {
        setRoute: (state, route) => {
            state.route = route;
        }
    },
    actions: {},
    modules: {
        experiences,
        skills,
        stories,
    }
});