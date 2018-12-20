<template>
    <div class="row">
        <div class="ui segment inverted black clearing">
            <button @click="transition" id="transition-switcher" class="ui inverted black button right floated">Try me !</button>
        </div>
        <div id="skills" class="content transition visible">
            <div class="row">
                Thanks to my different missions,
                I worked with a lot of different stacks,
                allowing me to succeed in both versatility (different stacks, and specialization (specialized PHP/JS).
            </div>
            <br />
            <Skills :key="skills.id" v-for="skills in mySkills" :skills="skills"></Skills>
        </div>

        <div id="hobbies" class="content transition hidden">
            <Hobby></Hobby>
        </div>
    </div>
</template>


<script>
    import { EventBus } from "../event-bus";
    import Skills from '../components/skills/Skills';
    import Hobby from '../components/skills/Hobby';

    export default {
        components: {
            Skills,
            Hobby,
        },
        data() {
            return {
                route: "skills",
                mySkills: [
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
                ],
            }
        },
        methods: {
            transition() {
                const elem=$('#transition-switcher');
                elem.addClass('disabled');

                let visibleComponent = $('.transition.visible'); 
                let hiddenComponent = $('.transition.hidden');
                visibleComponent.transition('browse left', function () {
                    hiddenComponent.transition('browse');
                    elem.removeClass('disabled');
                });
            }
        },
        created() {
            EventBus.$emit('updateRoute', this.route);

            // In case of a double click, it will clear the permanent disabled class without influencing the flow
            setInterval(() => {
                const transitionBtn = $('#transition-switcher');
                if (transitionBtn.hasClass('disabled')) {
                    setTimeout(() => {
                        $('#transition-switcher').removeClass('disabled');
                    }, 500);
                }
            }, 500);
        },
    }
</script>

<style scoped>
    .content {
        text-align: center;
        margin: 2em 3em 3em 2em;
    }
</style>