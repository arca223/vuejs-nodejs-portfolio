<template>
    <div class="skill">
        <img class="logo-skill"
             :src="skill.src"
             :alt="skill.name"/>

        <div v-if="skill.label">
            {{ skill.label }}
        </div>
        <div class="skill-stars">
            <i class="star icon custom-icon"
               :key="skill.id"
               v-for="i in 5"
               :class="{'star-full-gold': (i <= skill.stars)}"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'skill'
        ]
    }
</script>

<style scoped>
    .skill {
        display: inline-block;
        justify-content:center;
        align-items:center;
        min-width: 128px;
        min-height: 128px;
    }
    .logo-skill {
        max-width: 80%; /* tweak to adjust landscape pictures */
        max-height: 64px;
    }
    .skill-stars {
        display: block;
        margin-top: 1em;
    }
    .star-full-gold {
        color: gold!important;
    }
    .custom-icon {
        margin: 0 0.125em 0 0.125em; /* aligns with the top image by using margin left+right to avoid last one */
    }
</style>