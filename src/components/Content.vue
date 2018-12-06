<template>
    <div class="row wide content">
        <h3>If you want to switch view type, click below</h3>
        <button class="ui inverted black button"
                @click='updateViewType'>Switch to Carousel</button>
        <br />
        <hr />
        <div class="row"
             :key="experience.name"
             v-for='experience in experiences'>
            <div class="four wide column">
                <img class="company-logo"
                     src="https://picsum.photos/200/200?random"
                     width="50px"
                     height="50px">

            </div>
            <div class="twelve wide column">
                <h1>{{ experience.name }}</h1>
                <p>{{ experience.description }}</p>
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                "experiences": [
                    {
                        "name": "Lead Developer",
                        "company": "Mister Auto",
                        "start": dayjs.format('2018-01-22'),
                        "end": dayjs.format('2018-09-28'),
                        "description": "Such job"
                    },
                    {
                        "name": "Second Exp",
                        "start": "",
                        "end": "",
                        "description": "Such job second time u know"
                    },
                    {
                        "name": "Third JobExp",
                        "start": "",
                        "end": "",
                        "description": "Wow much amazed"
                    },
                    {
                        "name": "Last exp",
                        "start": "",
                        "end": "",
                        "description": "Just before now u know"
                    }
                ]
            }
        },
        methods: {
            updateViewType: function() {
                this.$emit('updateViewType');
            }
        }
    }
</script>

<style scoped>
    .content {
        background-color: #373737;
        color: white;
        text-align: center;
    }
    .company-logo {
        float: left;
    }
</style>
