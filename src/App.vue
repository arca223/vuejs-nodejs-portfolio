<template>
    <div id="app">
        <Header :activeRoute="activeRoute"></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import { EventBus } from "./event-bus.js";
    import Header from "./components/shared/Header";
    import Footer from "./components/shared/Footer";

    export default {
        name: 'app',
        components: {
            Header,
            Footer,
        },
        data: () => {
            return {
                "activeRoute": "home"
            }
        },
        created() {
            EventBus.$on('updateRoute', (route) => {
                return this.activeRoute = route;
            });
        },
    }
</script>

<style>
    #app {
        background-color: #1b1c1d;
        color: white;
    }
</style>
