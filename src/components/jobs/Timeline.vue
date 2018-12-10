<template>
    <div class="row wide content">
        <SectionTitle :title="'Professional Background Experiences'"></SectionTitle>
        <ViewSwitcher :selectedView="selectedView"></ViewSwitcher>
        <div class="row component">
            Welcome to Timeline Component - WIP
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
    .content {
        height: 600px;
    }
    .component {
        border: solid 2px red; /* temp css : just to diff with Carousel comp */
    }
</style>
