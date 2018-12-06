<template>
    <div class="row wide content">
        <h3>If you want to switch view type, click below</h3>
        <button class="ui inverted black button"
                @click="updateViewType">Switch to Scrolling</button>

        <div class="row">

        </div>
    </div>
</template>


<script>
    export default {
        methods: {
            updateViewType: function() {
                this.$emit('updateViewType');
            }
        }
    }


</script>

<style scoped>
    .content {
        height: 600px;
        background-color: #373737;
    }
</style>
