<template>
    <div>
        <Header :activeRoute="route"></Header>
        <div class="row">
            To contact me... Well contact me on LinkedIn.
            NodeJS Email feature : WIP
        </div>
        <Footer></Footer>
    </div>
</template>


<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";

    export default {
        name: 'contact',
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                "route": "contact"
            }
        },
    }
</script>
