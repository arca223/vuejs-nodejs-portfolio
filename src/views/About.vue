<template>
    <div>
        <div class="row">
            Hello there, this is my biography ! So basically.. stuff about me I guess
        </div>
    </div>
</template>


<script>
    import { EventBus } from "../event-bus";

    export default {
        data: () => {
            return {
                "route": "about"
            }
        },
        created() {
            EventBus.$emit('updateRoute', this.route)
        },
    }
</script>