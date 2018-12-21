<template>
    <div class="row wide">
        <SectionTitle :title="'Professional Background Experiences'"></SectionTitle>
        <ViewSwitcher :selectedView="selectedView"></ViewSwitcher>
        <div class="row slider wrapper">
            <div class="row"
                 :key="experience.id"
                 v-for="(experience, index) in experiences"
                 :class='(index === activeTile) ? "transition" : "transition hidden"'>
                <JobTile :experience="experience"></JobTile>
            </div>
        </div>
    </div>
</template>


<script>
    const ARROW_LEFT = 37;
    const ARROW_RIGHT = 39;

    import ViewSwitcher from "../ViewSwitcher";
    import SectionTitle from "../SectionTitle";
    import JobTile from "./JobTile";

    export default {
        props: [
            'selectedView',
            'experiences'
        ],
        components: {
            ViewSwitcher,
            SectionTitle,
            JobTile
        },
        data() {
            return {
                activeTile: 0
            }
        },
        mounted() {
            // Those methods need to be defined here to be accessed by mounted()
            const slideForward = () => {
                this.activeTile = (this.activeTile === this.experiences.length-1) ? 0 : ++this.activeTile;
            };
            const slideBack = () => {
                this.activeTile = (this.activeTile === 0) ? this.experiences.length-1 : --this.activeTile;
            };

            // We cannot bind @keyup without an input, so adding the listener to trigger on the whole component
            window.addEventListener('keyup', function(event) {
                if (event.keyCode === ARROW_RIGHT) {
                    slideForward();
                } else if (event.keyCode === ARROW_LEFT) {
                    slideBack();
                }
            });
        },
        destroyed() {

        }
    }
</script>

<style scoped>
    .wrapper {
        text-align: center;
        background-color: #393939;
    }
</style>
