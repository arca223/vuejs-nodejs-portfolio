<template>
    <div class="row">
        Welcome to the HomePage
    </div>
</template>


<script>
    import { EventBus } from "../event-bus";

    export default {
        data: () => {
            return {
                "route": "home"
            }
        },
        created() {
            EventBus.$emit('updateRoute', this.route);
        },
    }
</script>
