<template>
    <div class="row">
        <form class="ui inverted form" @submit.prevent="sendEmail">
            <div class="field error" v-if="Object.keys(errors).length">
                <p>Please correct the following error(s):</p>
                <ul>
                    <li v-for="error in errors">Please do not leave blank the field <b>{{ error }}</b>.</li>
                </ul>
            </div>
            <div class="required field"
                 :class='isIncluded("from") ? "error" : ""'>
                <label class="label">From:</label>
                <div class="ui right icon input">
                    <i class="big address card outline icon"></i>
                    <input v-model.trim="from" type="text" placeholder="your.email@email.me">
                </div>
            </div>
            <div class="ui inverted divider"></div>
            <div class="required field"
                 :class='{ error: isIncluded("topic")}'>
                <label class="label">Topic:</label>
                <input v-model="topic" type="text" placeholder="Topic...">
            </div>
            <div class="required field"
                 :class='isIncluded("content") ? "error" : ""'>
                <label class="label">Content:</label>
                <textarea class="inverted" v-model="content" placeholder="Content..."></textarea>
            </div>
            <div class="ui inverted divider"></div>
            <button class="ui right labeled icon inverted black button right floated btn-send">
                <i class="inverted large envelope outline icon"></i>
                Send
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                errors: [],
                submitted: false,
                from: "",
                topic: "",
                content: ""
            }
        },
        methods: {
            sendEmail: function(event) {
                event.preventDefault();
                // Clear errors and set submit token to true
                this.errors = [];
                this.submitted = true;

                if (!this.validateForm()) {
                    return;
                }

                let data = {
                    from: this.from,
                    topic: this.topic,
                    content: this.content
                };

                this.$http.post('http://localhost:8080/send-email',
                    data,
                    {
                        headers: {
                            'Content-type': 'application/json',
                        }
                    }).then(response => {
                        console.log(response.data);
                        console.log(JSON.parse(response.data.email));
                });
            },
            validateForm: function () {
                if (0 === Object.keys(this.from).length && 0 > this.errors.indexOf("from"))
                    this.errors.push('from');
                if (0 === Object.keys(this.topic).length && 0 > this.errors.indexOf("topic"))
                    this.errors.push('topic');
                if (0 === Object.keys(this.content).length && 0 > this.errors.indexOf("content"))
                    this.errors.push('content');

                return (0 === Object.keys(this.errors).length)
            },
            isIncluded: function(value) {
                // Prevent the error class to proc on loading
                if (!this.submitted) return false;

                return this.errors.find(error => value === error);
            }
        }
    }
</script>

<style scoped>
    .btn-send{
        z-index: 1;
    }

    .label {
        padding-left: 1.15em; /* aligns label with placeholder + text */
    }
</style>