<template>
    <div class="row wide content">
        <h3>If you want to switch view type, click below</h3>
        <button class="ui inverted black button"
                @click='updateViewType'>Switch to Carousel</button>
        <br />
        <hr />
        <div class="row"
             :key="experience.id"
             v-for='experience in experiences'>
            <div class="four wide column">
                <img class="company-logo"
                     src="https://picsum.photos/200/200?random"
                     width="50px"
                     height="50px">
                <div>
                    {{ experience.company }}
                    <br />
                    {{ experience.start.format('YYYY-MM-DD') }} - {{ experience.end.format('YYYY-MM-DD') }}
                </div>
            </div>
            <div class="twelve wide column">
                <h1>{{ experience.name }}</h1>
                Duration : {{ experience.end.diff(experience.start, "month") }} months
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
                        "start": dayjs(new Date(2018, 0, 22)),
                        "end": dayjs(new Date(2018, 8, 28)),
                        "description": "Such job"
                    },
                    {
                        "name": "Second Exp",
                        "company": "Mister Auto",
                        "start": dayjs(new Date(2018,1,22)),
                        "end": dayjs(new Date(2018,9,28)),
                        "description": "Such job second time u know"
                    },
                    {
                        "name": "Third JobExp",
                        "company": "Mister Auto",
                        "start": dayjs(new Date(2018,1,22)),
                        "end": dayjs(new Date(2018,9,28)),
                        "description": "Wow much amazed"
                    },
                    {
                        "name": "Last exp",
                        "company": "Mister Auto",
                        "start": dayjs(new Date(2018,1,22)),
                        "end": dayjs(new Date(2018,9,28)),
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
