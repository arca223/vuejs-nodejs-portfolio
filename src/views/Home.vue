<template>
    <div class="row">
        <Header :activeRoute="route"></Header>
        <div class="row content">
            <Experiences v-if="selectedView === 'blocks'" :selectedView="selectedView"></Experiences>
            <Carousel v-else-if="selectedView === 'carousel'" :selectedView="selectedView"></Carousel>
            <Timeline v-else :selectedView="selectedView"></Timeline>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import { EventBus } from "../event-bus.js";

    import Header from '../components/Header.vue'
    import Carousel from '../components/Carousel.vue'
    import Timeline from '../components/Timeline.vue'
    import Experiences from '../components/Experiences.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'home',
        components: {
            Header,
            Experiences,
            Carousel,
            Timeline,
            Footer,
        },
        data() {
            return {
                "selectedView": "blocks", //default view set to "block"
                "route": "home"
            }
        },
        created() {
            EventBus.$on('updateViewType', (value) => {
                return this.selectedView = value;
            });
        },
    }
</script>

<style scoped>
    .content {
        height: 100%;
    }
</style>