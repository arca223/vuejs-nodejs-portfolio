<template>
    <div class="row contact">
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

<style scoped>
    .contact {
        text-align: center;
        margin: 2em 3em 3em 2em;
    }
</style>