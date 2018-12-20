<template>
    <div id="app">
        <Header :activeRoute="activeRoute"></Header>
        <router-view class="container"></router-view>
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
                activeRoute: "home"
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
    html, body {
        height: 100%;
    }
    #app {
        background-color: #1b1c1d;
        color: white;
        min-height: 100%;
        position: relative;
    }
    .container {
        padding-bottom: 4em; /* matching footer's size to fix scrolling overlapping content */
    }
</style>