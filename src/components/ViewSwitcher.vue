<template>
    <div class="row wide switcher">
        <h3 class="btn-title">Switch View Type</h3>
        <div class="row">
            <button class="ui inverted black button"
                    :key="type.id"
                    v-for="type in selectedViewTypes"
                    @click="updateViewType(type)">
                {{ type|capitalize }}
            </button>
        </div>
        <br />
        <br />
    </div>
</template>

<script>
    import Capitalize from '../filters/capitalize.js'

    export default {
        data() {
            return {
                types: ['blocks', 'carousel', 'timeline'],
            }
        },
        computed: {
            selectedView() {
                return this.$store.getters.getExperienceView;
            },
            selectedViewTypes() {
                return this.types.filter(function(type) {
                    return this.selectedView() !== type;
                })
            }
        },
        methods: {
            updateViewType: function(value) {
                this.$store.commit("setExperienceView", value);
            }
        },
        filters: {
            Capitalize,
        }
    }
</script>

<style scoped>
    .switcher {
        margin: 0 2em 0 0;
        text-align: right;
    }
    .btn-title {
        padding-right: 0.25em;
    }
</style>