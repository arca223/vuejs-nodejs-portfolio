<template>
    <div class="row wide content">
        <ViewSwitcher></ViewSwitcher>
        <div class="row">

        </div>
    </div>
</template>


<script>
    import ViewSwitcher from "./ViewSwitcher";

    export default {
        components: {ViewSwitcher},
    }
</script>

<style scoped>
    .content {
        height: 600px;
    }
</style>
