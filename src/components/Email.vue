<template>
    <div class="row">

        <form class="ui inverted form">
            <div class="required field">
                <label class="label">From:</label>
                <div class="ui right icon input">
                    <i class="big address card outline icon"></i>
                    <input v-model.trim="sender" type="text" placeholder="your.email@email.me">
                </div>
            </div>
            <div class="ui inverted divider"></div>
            <div class="required field">
                <label class="label">Topic:</label>
                <input v-model="topic" type="text" placeholder="Topic...">
            </div>
            <div class="required field">
                <label class="label">Content:</label>
                <textarea class="inverted" v-model="content" placeholder="Content..."></textarea>
            </div>
            <div class="ui inverted divider"></div>
            <button class="ui right labeled icon inverted black button right floated"
                    @click="sendEmail">
                <i class="inverted envelope outline icon"></i>
                Send
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                sender: "",
                topic: "",
                content: ""
            }
        },
        methods: {
            sendEmail: function(event) {
                event.preventDefault();
            }
        }
    }
</script>

<style scoped>
    .label {
        padding-left: 1.15em; /* aligns label with placeholder + text */
    }
</style>