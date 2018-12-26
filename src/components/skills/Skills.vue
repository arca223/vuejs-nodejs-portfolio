<template>
    <div>
        <div class="row label">
            <h1>{{ skills.label }}</h1>
        </div>
        <hr />
        <div class="row block-skills">
            <Skill :key="skill.id" v-for="skill in skills.skills" :skill="skill"></Skill>
        </div>
    </div>
</template>

<script>
    import Skill from './Skill.vue';

    export default {
        props: [
            'skills'
        ],
        components: {
            Skill
        },
    }
</script>

<style scoped>
    .label {
        margin-top: 3em;
    }
    .block-skills {
        margin-top: 1em;
    }
</style>