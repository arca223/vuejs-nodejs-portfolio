<template>
    <div class="row contact">
        <Email></Email>
    </div>
</template>


<script>
    import Email from '../components/Email';

    export default {
        components: {
            Email
        },
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
        margin: 2em 3em 0 2em;
        padding-bottom: 3em;
    }
</style>