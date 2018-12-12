<template>
    <div>
        <div class="ui grid">
            <div class="row"
                 :key="story.id"
                 v-for="(story, index) in stories"
            >
                <!-- If Even, then Text 10col / Picture 6col  -->
                <div v-if="index%2 === 0"
                     class="ten wide column middle aligned item-left text"
                     v-html="story.text"></div>
                <div v-if="index%2 === 0"
                     class="six wide column middle aligned item-right ui image">
                    <img :src="story.picture"/>
                </div>

                <!-- else switch to Picture 6col / Text 10col -->
                <div v-if="index%2 === 1"
                     class="six wide column middle aligned item-left ui image">
                    <img :src="story.picture"/>
                </div>
                <div v-if="index%2 === 1"
                     class="ten wide column middle aligned item-right text"
                     v-html="story.text"></div>
            </div>
        </div>

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
                "stories": [
                    {
                        "text": `Hi, I am ${myself.firstname} (${myself.surname}) ${myself.lastname},` +
                            ` my friends often call me Le Coq or Coq (as for "Rooster", of course.. Please. :) ).` +
                            ` I am a ${myself.age}yo French Web Engineer, specialized in PHP/JS Stacks` +
                            ` with ${myself.experience} years experience.<br />` +
                            ` I actually live in Japan. I took my chances and grabbed the opportunity to leave France` +
                            ` and the awesome company Abbeal to challenge myself and discover this new culture`+
                            ` and new work environment.<br />` +
                            `I am now in process of finding a Job even if I do not speak Japanaese.` +
                            ` In the meantime, I am learning new technologies, as VueJS, Docker, NodeJS`+
                            ` and soon Laravel or something else depending my needs and the hype.`
                        ,
                        "picture": "https://picsum.photos/400/300?1"
                    },
                    {
                        "text": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.` +
                            ` Fusce hendrerit lacus aliquet, fringilla elit at, pharetra est.` +
                            ` Suspendisse ut lectus porta, auctor urna id, fermentum purus.` +
                            ` Pellentesque erat erat, semper non ante in, cursus elementum tellus.` +
                            ` Aliquam erat volutpat. Maecenas dignissim lobortis sapien a sodales.` +
                            ` Nulla facilisi. Integer facilisis blandit felis, ut convallis nisl tincidunt sed.` +
                            ` Aliquam eget dui aliquet, volutpat turpis vel, cursus orci.` +
                            ` Suspendisse interdum mauris vitae hendrerit tincidunt.<br /><br />` +
                            `Aenean feugiat velit ut nibh eleifend, ut faucibus risus rhoncus.` +
                            ` Praesent at dolor elementum, vestibulum est sit amet, feugiat quam.` +
                            ` Pellentesque dictum, mi in vehicula pellentesque, mauris neque molestie quam,` +
                            ` in laoreet enim nulla ac ex. Maecenas sed dictum massa. In hac habitasse platea dictumst.` +
                            ` Nulla ut mollis tellus. Integer quis turpis convallis, placerat est at, pulvinar tortor.` +
                            ` Pellentesque rutrum ligula vitae neque fermentum efficitur. ` +
                            ` Etiam et purus luctus, scelerisque urna egestas, fringilla tellus.` +
                            ` Cras eu bibendum elit. Suspendisse porta ut massa ac pharetra.` +
                            ` Donec malesuada feugiat diam, eget efficitur nisi porta ac.`
                        ,
                        "picture": "https://picsum.photos/400/300?2"
                    },
                    {
                        "text": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.` +
                            ` Fusce hendrerit lacus aliquet, fringilla elit at, pharetra est.` +
                            ` Suspendisse ut lectus porta, auctor urna id, fermentum purus.` +
                            ` Pellentesque erat erat, semper non ante in, cursus elementum tellus.` +
                            ` Aliquam erat volutpat. Maecenas dignissim lobortis sapien a sodales.` +
                            ` Nulla facilisi. Integer facilisis blandit felis, ut convallis nisl tincidunt sed.` +
                            ` Aliquam eget dui aliquet, volutpat turpis vel, cursus orci.` +
                            ` Suspendisse interdum mauris vitae hendrerit tincidunt.<br /><br />` +
                            ` Pellentesque dictum, mi in vehicula pellentesque, mauris neque molestie quam,` +
                            ` Pellentesque rutrum ligula vitae neque fermentum efficitur. ` +
                            ` Etiam et purus luctus, scelerisque urna egestas, fringilla tellus.` +
                            ` Cras eu bibendum elit. Suspendisse porta ut massa ac pharetra.`
                        ,
                        "picture": "https://picsum.photos/400/300?3"
                    },
                    {
                        "text": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.` +
                            ` Nulla facilisi. Integer facilisis blandit felis, ut convallis nisl tincidunt sed.` +
                            ` Aliquam eget dui aliquet, volutpat turpis vel, cursus orci.` +
                            ` Suspendisse interdum mauris vitae hendrerit tincidunt.<br /><br />` +
                            `Aenean feugiat velit ut nibh eleifend, ut faucibus risus rhoncus.` +
                            ` Praesent at dolor elementum, vestibulum est sit amet, feugiat quam.` +
                            ` Pellentesque dictum, mi in vehicula pellentesque, mauris neque molestie quam,` +
                            ` in laoreet enim nulla ac ex. Maecenas sed dictum massa. In hac habitasse platea dictumst.` +
                            ` Nulla ut mollis tellus. Integer quis turpis convallis, placerat est at, pulvinar tortor.` +
                            ` Pellentesque rutrum ligula vitae neque fermentum efficitur. ` +
                            ` Etiam et purus luctus, scelerisque urna egestas, fringilla tellus.` +
                            ` Cras eu bibendum elit. Suspendisse porta ut massa ac pharetra.` +
                            ` Donec malesuada feugiat diam, eget efficitur nisi porta ac.`
                        ,
                        "picture": "https://picsum.photos/400/300?4"
                    },
                ],

            }
        },
        created() {
            EventBus.$emit('updateRoute', this.route)
        },
    }
</script>

<style scoped>
    .text {
        text-align: justify;
    }
    .item-left {
        margin: 2em 0 3em 0;
        padding-left: 3em!important;
        padding-right: 1.5em!important;
    }
    .item-right {
        margin: 2em 0 3em 0;
        padding-left: 1.5em!important;
        padding-right: 3em!important;
    }
</style>