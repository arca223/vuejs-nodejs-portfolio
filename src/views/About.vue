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
    import { stories } from "../stores/modules/stories.js";

    export default {
        data: () => {
            return {
                route: "about",
                stories: stories,
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