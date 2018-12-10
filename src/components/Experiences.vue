<template>
    <div class="row wide">
        <SectionTitle :title="'Professional Background Experiences'"></SectionTitle>
        <ViewSwitcher :selectedView="selectedView"></ViewSwitcher>
        <div class="jobs">
            <div class="row job-tile"
                 :class='index%2 ? "odd" : "even"'
                 :key="experience.id"
                 v-for='(experience, index) in experiences'>
                <JobTile :experience="experience"></JobTile>
            </div>
        </div>
    </div>
</template>

<script>
    import ViewSwitcher from "./ViewSwitcher.vue";
    import JobTile from "./JobTile.vue";
    import SectionTitle from "./SectionTitle.vue";

    export default {
        components: {
            ViewSwitcher,
            JobTile,
            SectionTitle,
        },
        props: [
            'selectedView'
        ],
        data() {
            return {
                "experiences": [
                    {
                        "name": "Lead Developer Consultant",
                        "company" : "Abbeal",
                        "client": "Mister Auto",
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
                        "name": "PHP Developer",
                        "company": "SQLI",
                        "client": "LDLC Group",
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
        }
    }
</script>

<style scoped>
    .jobs {
        background-color: inherit;
        text-align: center;
        margin: 0 2em 0 2em;
    }

    .job-tile {
        margin: 1.5em 0 1.5em 0!important; /* necessary to overrides ui grid negative margin */
    }

    .odd {
        background-color: #373737;
    }
    .even {
        background-color: #535353;
    }
</style>
