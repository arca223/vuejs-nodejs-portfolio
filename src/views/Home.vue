<template>
    <div class="row">
        <Header :activeRoute="route"></Header>
        <Experiences v-if="defaultViewType"></Experiences>
        <CarouselContent v-else ></CarouselContent>
        <Footer></Footer>
    </div>
</template>

<script>
    import { EventBus } from "../event-bus.js";

    import Header from '../components/Header.vue'
    import CarouselContent from '../components/CarouselContent.vue'
    import Experiences from '../components/Experiences.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'home',
        components: {
            Header,
            Experiences,
            CarouselContent,
            Footer,
        },
        data() {
            return {
                "defaultViewType": true,
                "route": "home"
            }
        },
        created() {
            EventBus.$on('updateViewType', () => {
                return this.defaultViewType = !this.defaultViewType;
            });
        }
    }
</script>
