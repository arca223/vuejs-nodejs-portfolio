<template>
    <div class="ui padded grid">
        <div class="four wide column companies-tile">
            <div class="row companies-tile-item">
                {{ experience.company }}
            </div>
            <div class="row companies-tile-item">
                <img class="ui small circular image centered company-item"
                     src="https://picsum.photos/200/200?random"
                     width="50px"
                     height="50px"
                     alt="company-logo"
                     onerror="replaceImg(this)"/>
            </div>
            <hr class="companies-tile-separator"/>
            <div class="row companies-tile-item">
                <img class="ui small circular image centered company-item"
                      src="https://picsum.photos/200/200?random"
                      width="50px"
                      height="50px"
                      alt="company-logo"
                      onerror="replaceImg(this)"/>
            </div>
            <div class="row companies-tile-item">
                {{ experience.client }}
            </div>
        </div>
        <div class="twelve wide column">
            <h1>{{ experience.name }}</h1>
            {{ experience.start.format('YYYY-MM-DD') }} - {{ experience.end.format('YYYY-MM-DD') }}
            <br />
            Duration : {{ experience.end.diff(experience.start, "month") }} months
            <br />
            <p class="description" v-html="experience.description"></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["experience"],
    }
</script>

<style scoped>
    .description {
        margin-top: 2em;
        text-align: left;
    }
    .companies-tile-item {
        margin: 1em 0 1em 0;
    }
</style>