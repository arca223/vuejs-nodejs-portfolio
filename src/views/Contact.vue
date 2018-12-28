<template>
    <div class="row contact">
        To contact me... Well contact me on LinkedIn.
        NodeJS Email feature : WIP
    </div>
</template>


<script>
    export default {
        computed: {
            route() {
                return this.$store.getters.getRoute;
            },
        },
        created() {
            this.$store.commit("setRoute", "contact");
        },
    }
</script>

<style scoped>
    .contact {
        text-align: center;
        margin: 2em 3em 3em 2em;
    }
</style>