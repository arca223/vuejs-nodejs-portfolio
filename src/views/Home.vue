<template>
    <div class="row centered home" v-html="story"></div>
</template>


<script>
    import { EventBus } from "../event-bus";

    export default {
        data: () => {
            return {
                "route": "home",
                "story": "Hello, Welcome to my Portfolio !<br />" +
                    "I took the opportunity as I was looking for a job in Japan" +
                    " to learn some new techs and create this webapp using those new learned skills." +
                    " I managed to work around with VueJS, NodeJS, SemanticUI, Nginx, Docker, AWS etc..<br />" +
                    " Please feel free to roam around to see my work and learn more <a href='/about'>about me</a>."
            }
        },
        created() {
            EventBus.$emit('updateRoute', this.route);
        },
    }
</script>

<style scoped>
    .home {
        text-align: center;
        margin: 2em 3em 3em 2em;
    }
</style>