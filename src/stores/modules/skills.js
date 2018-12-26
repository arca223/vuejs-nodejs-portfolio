const state = {
    skills: [
        {
            label: "Technical Skills",
            skills: [
                {
                    name: "php",
                    src: "assets/img/skills/logo-php.png",
                    stars: 5
                },
                {
                    name: "js",
                    src: "assets/img/skills/logo-js.png",
                    stars: 5
                },
                {
                    name: "symfony",
                    src: "assets/img/skills/logo-sf.svg",
                    stars: 4
                },
                {
                    name: "vuejs",
                    src: "assets/img/skills/logo-vuejs.png",
                    stars: 4
                },
                {
                    name: "angularjs",
                    src: "assets/img/skills/logo-angularjs.png",
                    stars: 3
                },
                {
                    name: "docker",
                    src: "assets/img/skills/logo-docker.png",
                    stars: 4
                },
                {
                    name: "nodejs",
                    src: "assets/img/skills/logo-nodejs.png",
                    stars: 2
                },
                {
                    name: "nginx",
                    src: "assets/img/skills/logo-nginx.png",
                    stars: 3
                },
            ],
        },
        {
            label: "Design skills",
            skills: [
                {
                    name: "css",
                    src: "assets/img/skills/logo-css.png",
                    stars: 3
                },
                {
                    name: "bootstrap",
                    src: "assets/img/skills/logo-bootstrap.png",
                    stars: 3
                },
                {
                    name: "semantic-ui",
                    src: "assets/img/skills/logo-semantic-ui.png",
                    stars: 3
                },
                {
                    name: "fontawesome",
                    src: "assets/img/skills/logo-fontawesome.png",
                    stars: 3
                },
            ]
        },
        {
            label: "Tools Skills",
            skills: [
                {
                    name: "circle-ci",
                    src: "assets/img/skills/logo-circleci.jpg",
                    stars: 3
                },
                {
                    name: "sentry",
                    src: "assets/img/skills/logo-sentry.png",
                    stars: 4
                },
                {
                    name: "datadog",
                    src: "assets/img/skills/logo-datadog.png",
                    stars: 4
                },
                {
                    name: "jenkins",
                    src: "assets/img/skills/logo-jenkins.svg",
                    stars: 3
                },
                {
                    name: "jira",
                    src: "assets/img/skills/logo-jira.svg",
                    stars: 5
                },
                {
                    name: "git",
                    src: "assets/img/skills/logo-git.svg",
                    stars: 5
                },
            ]
        },
        {
            label: "Social and Communication Skills",
            skills: [
                {
                    name: "agility",
                    src: "assets/img/skills/logo-agility.png",
                    stars: 5,
                },
                {
                    name: "meetings",
                    src: "assets/img/skills/logo-teamwork.jpg",
                    stars: 5,
                },
                {
                    name: "french",
                    src: "https://www.countryflags.io/fr/flat/64.png",
                    stars: 5,
                    description: "native"
                },
                {
                    name: "english",
                    src: "https://www.countryflags.io/gb/flat/64.png",
                    stars: 5,
                    description: "fluent, CAE level C1"
                },
                {
                    name: "japanese",
                    src: "https://www.countryflags.io/jp/flat/64.png",
                    stars: 2,
                    description: "beginner"
                },
                {
                    name: "spanish",
                    src: "https://www.countryflags.io/es/flat/64.png",
                    stars: 2,
                    description: "beginner"
                },
            ],
        },
    ]
};



const getters = {};
const mutations = {};
const actions = {};

export const skills = {
    state,
    getters,
    mutations,
    actions
};
