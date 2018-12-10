<template>
    <div class="row wide section-title">
        <h1>{{ title }}</h1>
    </div>
</template>


<script>
    export default {
        props: {
            title: String
        },
    }
</script>

<style scoped>
    .section-title {
        text-align: center;
        margin: 4em 0 2em 0;
    }
</style>
