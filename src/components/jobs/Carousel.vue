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
            <span><i class="huge inverted chevron left icon" @click="slideBack"></i></span>
            <span><i class="huge inverted chevron right icon" @click="slideForward"></i></span>
            <span class="list-icons-wrapper">
                <i :key="experience.id"
                   v-for="(experience, index) in experiences"
                   class="inverted circle icon"
                   :class='(index === activeTile) ? "" : "outline"' ></i>
            </span>
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
                in: null,
                oldTile: null,
                sliding: false,
            }
        },
        computed: {
            experiences() {
                return this.$store.state.experiences;
            }
        },
        methods: {
            // Used for the arrow buttons (Icons) answering to click event
            slideForward: function() {
                this.out = "right";
                this.in = "left";
                this.oldTile = this.activeTile;
                this.activeTile = (this.activeTile === this.experiences.length - 1) ? 0 : ++this.activeTile;
            },
            slideBack: function() {
                this.out = "left";
                this.in = "right";
                this.oldTile = this.activeTile;
                this.activeTile = (this.activeTile === 0) ? this.experiences.length - 1 : --this.activeTile;
            },
        },
        watch: {
            activeTile: function() {
                let vm = this;

                // sliding is a safeguard token to avoid double clicks.
                if (this.sliding) {
                    this.activeTile = this.oldTile;
                    return;
                }
                this.sliding = true;
                let visibleComponent = $('.transition.visible');
                let nextComponent = $(`div.job-tile#${this.activeTile}`);

                visibleComponent.transition(`fade ${this.out}`, function () {
                    nextComponent.transition(`fade ${vm.in}`, function () {
                        vm.sliding = false;
                    });
                });
            }
        },
        mounted() {
            // Used for keyup left and right
            // Those methods need to be defined here to be accessed by mounted()
            // Note that the semanticUI fade event names (right/left) are inversed compared to my logic/naming
            // look at the documentation examples to see the output
            const slideForward = () => {
                this.out = "right";
                this.in = "left";
                this.oldTile = this.activeTile;
                this.activeTile = (this.activeTile === this.experiences.length-1) ? 0 : ++this.activeTile;
            };
            const slideBack = () => {
                this.out = "left";
                this.in = "right";
                this.oldTile = this.activeTile;
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

            // Setting the maximum height to each children to avoid having the page resizing and elements moving around
            let maxHeight = 0;
            $('.job-tile').each(function() {
                $(this).children().each(function(){
                    maxHeight = ($(this).height() > maxHeight ? $(this).height() : maxHeight);
                });
                $(this).height(maxHeight).children().height(maxHeight);
            });
        }
    }
</script>

<style scoped>
    .wrapper {
        text-align: center;
        position: relative;
    }
    .job-tile {
        z-index: 1000;
        margin: 2em 3em 2em 3em;
        background-color: #393939;
        padding-right: 1em;
        padding-bottom: 3em;
    }
    .chevron.icon:hover {
        cursor: pointer;
    }
    .chevron.icon {
        z-index: 1001;
        position: absolute;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .chevron.icon.left {
        top: 50%;
        left: 0.75em;
    }
    .chevron.icon.right {
        top: 50%;
        right: -0.5em;
    }
    .list-icons-wrapper {
        z-index: 1001;
        position: absolute;
        bottom: 2em;
    }
</style>
