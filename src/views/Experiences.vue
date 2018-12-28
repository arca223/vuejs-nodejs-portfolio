<template>
    <div class="row">
        <JobBlocks v-if="selectedView === 'blocks'"></JobBlocks>
        <Carousel v-else-if="selectedView === 'carousel'"></Carousel>
        <Timeline v-else></Timeline>
    </div>
</template>

<script>
    import Carousel from '../components/jobs/Carousel.vue';
    import Timeline from '../components/jobs/Timeline.vue';
    import JobBlocks from '../components/jobs/JobBlocks.vue';

    export default {
        components: {
            JobBlocks,
            Carousel,
            Timeline,
        },
        computed: {
            route() {
                return this.$store.getters.getRoute;
            },
            selectedView() {
                return this.$store.getters.getExperienceView;
            }
        },
        created() {
            this.$store.commit("setRoute", "experiences");
        },
    }
</script>

<style scoped>
</style>

