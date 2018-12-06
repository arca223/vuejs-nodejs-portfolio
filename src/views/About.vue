<template>
    <div>
        <Header :activeRoute="route"></Header>
        <div class="row">
            Hello there, this is my biography ! So basically.. stuff about me I guess
        </div>
        <Footer></Footer>
    </div>
</template>


<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";

    export default {
        name: 'about',
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                "route": "about"
            }
        },
    }
</script>