<template>
    <div class="row wide">
        <SectionTitle :title="'Professional Background Experiences'"></SectionTitle>
        <ViewSwitcher :selectedView="selectedView"></ViewSwitcher>
        <div class="row">
            Welcome to Carousel - WIP
        </div>
    </div>
</template>


<script>
    import ViewSwitcher from "../ViewSwitcher";
    import SectionTitle from "../SectionTitle";

    export default {
        props: ['selectedView'],
        components: {
            ViewSwitcher,
            SectionTitle
        },
    }
</script>

<style scoped>
</style>