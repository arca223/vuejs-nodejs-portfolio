<template>
    <div class="skill">
        <img class="logo-skill"
             :src="logo.src"
             :alt="logo.name"/>
        <div class="skill-stars">
            <i class="star icon custom-icon"
               :key="logo.id"
               v-for="i in 5"
               :class="{'star-full-gold': (i <= logo.stars)}"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'logo'
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
        display: block;
        margin: auto auto 0.5em auto;
        max-width: 64px;
        max-height: 64px;
    }
    .skill-stars {
        display: block;
        margin: auto;
    }
    .star-full-gold {
        color: gold!important;
    }
    .custom-icon {
        margin: 0 0.125em 0 0.125em; /* aligns with the top image by using margin left+right to avoid last one */
    }
</style>