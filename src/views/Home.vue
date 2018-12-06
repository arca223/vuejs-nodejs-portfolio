<template>
    <div class="row">
        <Header :activeRoute="route"></Header>
        <Content v-if="defaultViewType" @updateViewType="updateViewType"></Content>
        <CarouselContent v-else @updateViewType="updateViewType"></CarouselContent>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import CarouselContent from '../components/CarouselContent.vue'
    import Content from '../components/Content.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'home',
        components: {
            Header,
            Content,
            CarouselContent,
            Footer,
        },
        data() {
            return {
                "defaultViewType": true,
                "route": "home"
            }
        },
        methods: {
            updateViewType: function () {
                return this.defaultViewType = !this.defaultViewType;
            }
        }
    }
</script>
