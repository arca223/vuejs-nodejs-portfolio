import Vue from 'vue';
import Vuex from 'vuex';

import { experiences } from './modules/experiences';
import { skills } from './modules/skills';
import { stories } from './modules/stories';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        experiences,
        skills,
        stories,
    }
});