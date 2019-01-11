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
            {{ experience.start.format('MMM, YYYY') }} - {{ experience.end.format('MMM, YYYY') }}
            <br />
            Duration : {{ getDuration(experience.start, experience.end) }}
            <br />
            <p class="description" v-html="experience.description"></p>
            <TileDigestContent class="summary" :experience="experience"></TileDigestContent>
        </div>
    </div>
</template>

<script>
    import TileDigestContent from './TileDigestContent';

    export default {
        components: {
            TileDigestContent,
        },
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
    .summary {
        margin-top: 1em;
        display: none;
    }
    @media screen and (max-width: 600px){
        .description {
            display: none;
        }
        .summary {
            display: block;
        }
        .company-logo {
            max-width: 64px;
            max-height: 64px;
        }
    }
</style>