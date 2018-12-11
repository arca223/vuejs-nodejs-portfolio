<template>
    <div class="row skills">
        <div class="row">
            Thanks to my different missions,
            I worked with a lot of different stacks,
            allowing me to succeed in both versatility (different stacks, and specialization (specialized PHP/JS).
        </div>
        <div class="row block-skills">
            <img
                class="image logo-skill"

                v-for="logo in logos"
                :src="logo.src"
                :alt="logo.name"
                />
            <!-- stars WIP to rank the skills -->
            <!-- <i class="star icon"></i><i class="star icon"></i><i class="star icon star-full-gold"></i> -->
        </div>
    </div>
</template>


<script>
    import { EventBus } from "../event-bus";

    export default {
        data: () => {
            return {
                "route": "skills",
                "logos": [
                    {
                        "name": "php",
                        "src": "assets/img/skills/logo-php.png"
                    },
                    {
                        "name": "js",
                        "src": "assets/img/skills/logo-js.png"
                    },
                    {
                        "name": "symfony",
                        "src": "assets/img/skills/logo-symfony.png"
                    },
                    {
                        "name": "vuejs",
                        "src": "assets/img/skills/logo-vuejs.png"
                    },
                    {
                        "name": "angularjs",
                        "src": "assets/img/skills/logo-angularjs.png"
                    },
                    {
                        "name": "docker",
                        "src": "assets/img/skills/logo-docker.png"
                    },
                    {
                        "name": "nginx",
                        "src": "assets/img/skills/logo-nginx.png"
                    },
                ]
            }
        },
        created() {
            EventBus.$emit('updateRoute', this.route)
        },
    }
</script>

<style scoped>
    .skills {
        text-align: center;
        margin: 2em 3em 3em 2em;
    }
    .block-skills {
        margin-top: 3em;
    }
    .logo-skill {
        margin: 1em;
        max-width: 64px;
        max-height: 64px;
    }
    .star-full-gold {
        color: gold!important;
    }

</style>