<template>
    <div class="row">
        <JobBlocks v-if="selectedView === 'blocks'" :selectedView="selectedView"></JobBlocks>
        <Carousel v-else-if="selectedView === 'carousel'" :selectedView="selectedView"></Carousel>
        <Timeline v-else :selectedView="selectedView"></Timeline>
    </div>
</template>

<script>
    import { EventBus } from '../event-bus.js';

    import Header from '../components/shared/Header.vue';
    import Carousel from '../components/jobs/Carousel.vue';
    import Timeline from '../components/jobs/Timeline.vue';
    import JobBlocks from '../components/jobs/JobBlocks.vue';
    import Footer from '../components/shared/Footer.vue';

    export default {
        components: {
            JobBlocks,
            Carousel,
            Timeline,
        },
        data() {
            return {
                selectedView: "blocks", //default view set to "block"
            }
        },
        computed: {
            route() {
                return this.$store.getters.getRoute;
            },
        },
        created() {
            this.$store.commit("setRoute", "experiences");
            EventBus.$on('updateViewType', (value) => {
                return this.selectedView = value;
            });
        },
    }
</script>

<style scoped>
</style>

