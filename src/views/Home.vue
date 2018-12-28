<template>
    <div class="row centered home" v-html="story"></div>
</template>


<script>
    export default {
        data: () => {
            return {
                story: "Hello, Welcome to my Portfolio !<br />" +
                    "I took the opportunity as I was looking for a job in Japan" +
                    " to learn some new techs and create this webapp using those new learned skills." +
                    " I managed to work around with VueJS, NodeJS, SemanticUI, Nginx, Docker, AWS etc..<br />" +
                    " Please feel free to roam around to see my work and learn more <a href='/about'>about me</a>."
            }
        },
        computed: {
            route() {
                return this.$store.getters.getRoute;
            },
        },
        created() {
            this.$store.commit("setRoute", "home");
        },
    }
</script>

<style scoped>
    .home {
        text-align: center;
        margin: 2em 3em 3em 2em;
    }
</style>