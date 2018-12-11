<template>
    <div>
        <div class="row about" v-html="biography"></div>
    </div>
</template>


<script>
    import { EventBus } from "../event-bus";

    export default {
        data: () => {
            const myself = {
                "firstname": "Maxime",
                "lastname": "Cocquempot",
                "surname": "Le Coq",
                "age": 25
            };

            return {
                myself,
                "route": "about",
                "biography": `Hi, I am ${myself.firstname} (${myself.surname}) ${myself.lastname},` +
                    ` my friends often call me Le Coq or Coq (as for "Rooster", of course.. Please. :) )` +
                    ` I am a ${myself.age}yo French Web Developer, specialized in PHP/JS Stacks.`
                ,
            }
        },
        created() {
            EventBus.$emit('updateRoute', this.route)
        },
    }
</script>

<style scoped>
    .about {
        text-align: center;
        margin: 2em 3em 3em 2em;
    }
</style>