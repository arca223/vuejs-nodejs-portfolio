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
                "age": 25,
                "experience": 5
            };

            return {
                myself,
                "route": "about",
                "biography": `Hi, I am ${myself.firstname} (${myself.surname}) ${myself.lastname},` +
                    ` my friends often call me Le Coq or Coq (as for "Rooster", of course.. Please. :) ).` +
                    ` I am a ${myself.age}yo French Web Engineer, specialized in PHP/JS Stacks` +
                    ` with ${myself.experience} years experience. <br />` +
                    ` I actually live in Japan. I took my chances and grabbed the opportunity to leave France` +
                    ` and the awesome company Abbeal to challenge myself and discover this new culture`+
                    ` and new work environment. I am now in process of finding a Job even if I do not speak Japanaese.` +
                    ` In the meantime, I am learning new technologies, as VueJS, Docker, NodeJS`+
                    ` and soon Laravel or something else depending my needs and the hype.`
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
        text-align: justify;
        margin: 2em 3em 3em 2em;
    }
</style>