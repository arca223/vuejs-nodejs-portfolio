<template>
    <div class="row">
        <JobBlocks v-if="selectedView === 'blocks'" :selectedView="selectedView" :experiences="experiences"></JobBlocks>
        <Carousel v-else-if="selectedView === 'carousel'" :selectedView="selectedView" :experiences="experiences"></Carousel>
        <Timeline v-else :selectedView="selectedView" :experiences="experiences"></Timeline>
    </div>
</template>

<script>
    import { EventBus } from "../event-bus.js";

    import Header from '../components/shared/Header.vue'
    import Carousel from '../components/jobs/Carousel.vue'
    import Timeline from '../components/jobs/Timeline.vue'
    import JobBlocks from '../components/jobs/JobBlocks.vue'
    import Footer from '../components/shared/Footer.vue'

    export default {
        components: {
            Header,
            JobBlocks,
            Carousel,
            Timeline,
            Footer,
        },
        data() {
            return {
                "selectedView": "blocks", //default view set to "block"
                "route": "experiences",
                "experiences": [
                    {
                        "name": "Lead Developer Consultant",
                        "company" : "Abbeal",
                        "client": "Mister Auto",
                        "companyLogoSrc": "assets/img/companies/logo-abbeal.png",
                        "clientLogoSrc": "assets/img/companies/logo-ma.png",
                        "start": dayjs(new Date(2018, 0, 22)),
                        "end": dayjs(new Date(2018, 8, 28)),
                        "description": "Project was creating a new V2 Website to remove the legacy, a complete rehaul of the front => new optimised e-commerce site with stronger performances, newer design and more responsive. Backend was already existing as an API<br />" +
                            "- Zend Expressive, micro framework (PHP) implementing PSR7 Middleware.<br />" +
                            "Project was decoupled into independent modules (close to SOA)  + AngularJS<br />" +
                            "- Worked for the Listing team (product listings and article pages). Worked on few fixes as we releases new pages, then started development of new features as the Choice Assistance to help users select associated products related to their car.<br />" +
                            "- Appointed as the Lead Developer after 1 month, managing the Listing team as also communicating and working with different divisions (Other  and working on release management, polishing processes, validating PRs..<br />" +
                            "- Full agility processes with using Jira as board tool<br />" +
                            "- Versioning using GitLab, with good processes to keep it clean<br />" +
                            "- Code Reviews and PR validation. Full GitFlow process adapted by our means for the company<br />" +
                            "- Development envs are on distant dockers, managed by DevOps<br />" +
                            "- R&D : Each friday afternoon of a sprint (2 Weeks), allowed me to discover and get into MeteorJS, ReactJS, ES6, and VueJS<br />" +
                            "Team composed of 3 Dev + Lead Tech (total of 5 teams)<br />"
                    },
                    {
                        "name": "PHP Symfony Developer Consultant",
                        "company": "Abbeal",
                        "client": "SmartTraffiK",
                        "companyLogoSrc": "assets/img/companies/logo-abbeal.png",
                        "clientLogoSrc": "assets/img/companies/logo-st.png",
                        "start": dayjs(new Date(2017,8,15)),
                        "end": dayjs(new Date(2018,11,28)),
                        "description": "Product Website V2 => approach SaaS as much as possible with SOA<br />" +
                            "The goal was to leave the “unmaintainable custom-made\" from the legacy and make all customers merge on one platform.<br />" +
                            "- Frequent meetings for tech and architectural choices for upcoming features<br />" +
                            "- Development of APIs, user management, user authorization<br />" +
                            "- Setting and polishing Git process with an Abbeal co-worker<br />" +
                            "- Agility with all processes with the dev team and the PO<br />" +
                            "- Code reviewing and resolving conflicts, peer-coding with teammates from both backend and frontend<br />" +
                            "Team composed of 4 backend dev, 3 frontend dev, 1 PO, 1QA, 1 CTO<br />"
                    },
                    {
                        "name": "PHP Symfony Developer Consultant",
                        "company": "Abbeal",
                        "client": "Xotelia",
                        "companyLogoSrc": "assets/img/companies/logo-abbeal.png",
                        "clientLogoSrc": "assets/img/companies/logo-xotelia.png",
                        "start": dayjs(new Date(2017,1,13)),
                        "end": dayjs(new Date(2017,9,13)),
                        "description": "Web Software solution allowing customers to manage all their bookings/prices/availabilities on one platform. <br />" +
                            "Our role (2 consultants) was taking back all projects following the ITs' departure => prevent and fix shutdowns and possible errors<br />" +
                            "Handover of three weeks for two big projects :<br />" +
                            "- Backoffice Symfony2+Legacy (Internal framework)<br />" +
                            "- Symfony3 project managing all the process of bookings<br />" +
                            "Managing servers and whole stack with CircleCI, Sentry, Datadog, RabbitMQ, Graphana and transverse projects<br />" +
                            "Opening new connections and managing existing ones (around 100 partners such as Booking.com, Airbnb, Expedia..)<br />" +
                            "Regular meeting between Support and ITs to express needs; find solutions and prioritize developments or fixes<br />" +
                            "Code review + test<br />"
                    },
                    {
                        "name": "PHP Developer Consultant",
                        "company": "SQLI",
                        "client": "LDLC Group",
                        "companyLogoSrc": "assets/img/companies/logo-sqli.png",
                        "clientLogoSrc": "assets/img/companies/logo-ldlc.png",
                        "start": dayjs(new Date(2016,9,3)),
                        "end": dayjs(new Date(2017,1,10)),
                        "description": "Transfer and taking in hand the project LDLC.PRO with an internal PHP framework<br />" +
                            "Setting up Git + Jenkins<br />" +
                            "Small project to simplify Sales team<br />" +
                            "The new big project should have been a PHP Symfony brand new project, " +
                            "such as why I was recruited but ended up being a .NET patch of the old website. " +
                            "I took the opportunity to join Abbeal at that time to match my expectation and my skills"

                    }
                ]
            }
        },
        created() {
            EventBus.$emit('updateRoute', this.route);
            EventBus.$on('updateViewType', (value) => {
                return this.selectedView = value;
            });
        },
    }
</script>

<style scoped>
</style>

