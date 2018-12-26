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
            <span v-if="experience.client">
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
            </span>
        </div>
        <div class="twelve wide column">
            <h1>{{ experience.name }}</h1>
            {{ experience.start.format('YYYY-MM-DD') }} - {{ experience.end.format('YYYY-MM-DD') }}
            <br />
            Duration : {{ getDuration(experience.start, experience.end) }}
            <br />
            <p class="description" v-html="experience.description"></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "experience"
        ],
        methods: {
            getDuration(start, end) {
                // TODO : Rework to match all cases, full years, year, year and months etc.
                let total = end.diff(start, "month");
                return (total > 11) ? `${total/12} years`:`${total} months`
            }
        }
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