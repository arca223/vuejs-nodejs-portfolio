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
    import { skills } from '../stores/skills';

    export default {
        components: {
            Skills,
            Hobby,
        },
        data() {
            return {
                route: "skills",
                mySkills: skills,
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