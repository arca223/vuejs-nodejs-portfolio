<template>
    <div class="row wide switcher">
        <h3>If you want to switch view type, click below</h3>
        <button class="ui inverted black button"
                @click='updateViewType'>Switch to Carousel</button>
        <br />
        <br />
    </div>
</template>

<script>
    import { EventBus } from '../event-bus.js';
    export default {
        methods: {
            updateViewType: function() {
                EventBus.$emit('updateViewType');
            }
        }
    }
</script>

<style scoped>
    .switcher {
        text-align: center;
    }
</style>