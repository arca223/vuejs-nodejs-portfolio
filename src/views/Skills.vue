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
            <div class="row block-skills">
                <Skill v-for="logo in logos" :logo="logo"></Skill>
            </div>
        </div>
        <div id="hobbies" class="content transition hidden">
            <div class="row">
                I like sports etc..
                Hobbies WIP !
                <i class="football ball icon"></i>
                <i class="music icon"></i>
                <i class="plane icon"></i>
            </div>

        </div>
    </div>
</template>


<script>
    import { EventBus } from "../event-bus";
    import Skill from '../components/skills/Skill';

    export default {
        components: {
            Skill
        },
        data() {
            return {
                "route": "skills",
                "logos": [
                    {
                        "name": "php",
                        "src": "assets/img/skills/logo-php.png",
                        "stars": 5
                    },
                    {
                        "name": "js",
                        "src": "assets/img/skills/logo-js.png",
                        "stars": 5
                    },
                    {
                        "name": "symfony",
                        "src": "assets/img/skills/logo-sf.svg",
                        "stars": 4
                    },
                    {
                        "name": "vuejs",
                        "src": "assets/img/skills/logo-vuejs.png",
                        "stars": 4
                    },
                    {
                        "name": "angularjs",
                        "src": "assets/img/skills/logo-angularjs.png",
                        "stars": 5
                    },
                    {
                        "name": "docker",
                        "src": "assets/img/skills/logo-docker.png",
                        "stars": 3
                    },
                    {
                        "name": "nginx",
                        "src": "assets/img/skills/logo-nginx.png",
                        "stars": 3
                    },
                ]
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
    .block-skills {
        margin-top: 3em;
    }
</style>