<template>
    <div class="row">
        To contact me... Well contact me on LinkedIn.
        NodeJS Email feature : WIP
    </div>
</template>


<script>
    import { EventBus } from "../event-bus";

    export default {
        data: () => {
            return {
                "route": "contact"
            }
        },
        created() {
            EventBus.$emit('updateRoute', this.route)
        },
    }
</script>
