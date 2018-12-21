<template>
    <div class="row wide">
        <SectionTitle :title="'Professional Background Experiences'"></SectionTitle>
        <ViewSwitcher :selectedView="selectedView"></ViewSwitcher>
        <div class="row slider wrapper">
            <div class="row job-tile"
                 :id="index"
                 :key="experience.id"
                 v-for="(experience, index) in experiences"
                 :class='(index === 0) ? "transition visible" : "transition hidden"'>
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
                activeTile: 0,
                out: null,
                in: null
            }
        },
        watch: {
            activeTile: function() {
                let visibleComponent = $('.transition.visible');
                let nextComponent = $(`div.job-tile#${this.activeTile}`);
                let vm = this;

                visibleComponent.transition(`fade ${this.out}`, function () {
                    nextComponent.transition(`fade ${vm.in}`);
                });
            }
        },
        mounted() {
            // Those methods need to be defined here to be accessed by mounted()
            // Note that the sementicUI fade event names (right/left) are special, look at the documentation exemples
            const slideForward = () => {
                this.out = "right";
                this.in = "left";
                this.activeTile = (this.activeTile === this.experiences.length-1) ? 0 : ++this.activeTile;
            };
            const slideBack = () => {
                this.out = "left";
                this.in = "right";
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
    }
    .job-tile {
        margin: 2em;
        background-color: #393939;
    }
</style>
