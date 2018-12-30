import Vue from 'vue';
import Vuex from 'vuex';

import experiences from './modules/experiences';
import skills from './modules/skills';
import stories from './modules/stories';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        route: "home",
        links: [
            {
                name: "home",
                url: "/"
            },
            {
                name: "experiences",
                url: "/experiences"
            },
            {
                name: "skills",
                url: "/skills"
            },
            {
                name: "about",
                url: "/about"
            },
            {
                name: "contact",
                url: "/contact"
            },
        ],
        socialNetworks: [
            {
                name: "linkedin",
                link: "https://www.linkedin.com/in/maxime-cocquempot-866944b2",
                icon: "linkedin",
            },
            {
                name: "github",
                link: "https://github.com/arca223",
                icon: "github",
            },
        ],
    },
    getters: {
        getRoute: (state) => {
            return state.route;
        },
        getLinks: (state) => {
            return state.links;
        },
        getSocialNetworks: (state) => {
            return state.socialNetworks;
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