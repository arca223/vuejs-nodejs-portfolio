<template>
    <div class="row wide switcher">
        <h3 class="btn-title">Switch View Type</h3>
        <div class="row">
            <button class="ui inverted black button"
                    :key="type.id"
                    v-for="type in types"
                    v-if="(selectedView !== type)"
                    @click='updateViewType(type)'>
                {{ type | capitalize }}
            </button>
        </div>
        <br />
        <br />
    </div>
</template>

<script>
    import { EventBus } from '../event-bus.js';
    import Capitalize from '../filters/capitalize.js'

    export default {
        props: [
            'selectedView'
        ],
        data: () => {
            return {
                types: ['blocks', 'carousel', 'timeline'],
            }
        },
        methods: {
            updateViewType: function(value) {
                EventBus.$emit('updateViewType', value);
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