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
            <div class="segment btn-wrapper">
                <button class="ui right labeled icon inverted black button right floated btn-send">
                    <i class="inverted large envelope outline icon"></i>
                    Send
                </button>
            </div>
        </form>

        <!-- Email sent notice modal-->
        <div class="ui basic modal">
            <div class="ui icon header">
                <i class="green checkmark icon"></i>
                Your email <b>{{ topic }}</b> has been sent.
            </div>
            <div class="content modal-content">
                <p>You will soon receive an email informing you that your email was processed to my professional address</p>
            </div>
            <div class="actions">
                <div class="ui green ok inverted button">
                    Ok
                </div>
            </div>
        </div>
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

                // Set the loader
                let btn = $('.btn-send>i');
                btn.removeClass('envelop outline');
                btn.addClass('loading volleyball ball');

                let data = {
                    from: this.from,
                    topic: this.topic,
                    content: this.content
                };

                this.$http.post('http://localhost:8080/send-email', data, {
                    headers: {
                        'Content-type': 'application/json',
                    }
                }).then(response => {
                    switch (response.data.status) {
                        case 200:
                            this.clearForm();
                            $('.ui.basic.modal').modal('show');
                            break;
                        default:
                            alert('error');
                            break;
                    }

                    btn.removeClass('loading volleyball ball');
                    btn.addClass('envelop outline');
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
            },
            clearForm: function () {
                this.from = "";
                this.topic = "";
                this.content = "";
            }
        },
        beforeDestroy() {
            // removing all existing modals to avoid duplication when navigating between components
            $('body .modals').remove();
        }
    }
</script>

<style scoped>
    .btn-send{
        z-index: 1;
    }
    .btn-wrapper {
        height: 5em; /* hack to make the container fix and not overlap footer */
    }
    .label {
        padding-left: 1.15em; /* aligns label with placeholder + text */
    }
    .modal-content {
        text-align: center;
    }
</style>