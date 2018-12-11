<template>
    <div class="ui padded grid">
        <div class="four wide column companies-tile">
            <div class="row companies-tile-item">
                <p>Company:</p>
                {{ experience.company }}
            </div>
            <div class="row companies-tile-item">
                <img class="ui image centered company-logo"
                     :src="experience.companyLogoSrc"
                     alt="company-logo"/>
            </div>
            <hr class="companies-tile-separator"/>
            <div class="row companies-tile-item">
                <img class="ui image centered company-logo"
                      :src="experience.clientLogoSrc"
                      alt="client-logo"/>
            </div>
            <div class="row companies-tile-item">
                <p>Client:</p>
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
    .company-logo {
        max-width: 128px;
        max-height: 128px;
    }
</style>