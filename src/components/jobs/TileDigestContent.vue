<template>
    <div class="ui padded grid timeline-tile-content">
        <div class="six wide column">
            <h5 class="ui inverted sub header">topic</h5>
            <p v-html="experience.summary.topic"></p>
        </div>
        <div class="six wide column">
            <h5 class="ui inverted sub header">project</h5>
            <p v-html="experience.summary.project"></p>
        </div>
        <div class="four wide column">
            <h5 class="ui inverted sub header">stack</h5>
            <p v-html="experience.summary.stack"></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'experience'
        ]
    }
</script>