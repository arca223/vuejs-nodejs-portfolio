const state = {
    experienceView: "blocks",
    experienceSectionTitle: "Professional Background Experiences",
    experiences: [
        {
            name: "Lead Engineer Consultant",
            company: "Abbeal",
            client: "Mister Auto",
            companyLogoSrc: "/src/assets/img/companies/logo-abbeal.png",
            clientLogoSrc: "/src/assets/img/companies/logo-ma.png",
            start: dayjs(new Date(2018, 0, 22)),
            end: dayjs(new Date(2018, 8, 28)),
            description: "Project was creating a new V2 Website to remove the legacy, a complete rehaul of the front => new optimised e-commerce site with stronger performances, newer design and more responsive. Backend was already existing as an API<br />" +
                "- Zend Expressive, micro framework (PHP) implementing PSR7 Middleware.<br />" +
                "Project was decoupled into independent modules (close to SOA)  + AngularJS<br />" +
                "- Worked for the Listing team (product listings and article pages). Worked on few fixes as we releases new pages, then started development of new features as the Choice Assistance to help users select associated products related to their car.<br />" +
                "- Appointed as the Lead Developer after 1 month, managing the Listing team as also communicating and working with different divisions (Other  and working on release management, polishing processes, validating PRs..<br />" +
                "- Full agility processes with using Jira as board tool<br />" +
                "- Versioning using GitLab, with good processes to keep it clean<br />" +
                "- Code Reviews and PR validation. Full GitFlow process adapted by our means for the company<br />" +
                "- Development envs are on distant dockers, managed by DevOps<br />" +
                "- R&D : Each friday afternoon of a sprint (2 Weeks), allowed me to discover and get into MeteorJS, ReactJS, ES6, and VueJS<br />" +
                "Team composed of 3 Dev + Lead Tech (total of 5 teams)<br />",
            summary: {
                fullSummary: "Topic : Mission at client MisterAuto as Listing team Lead Developer<br />" +
                    "Project : Website V2<br />" +
                    "Tech Stack : PHP (ZE), JS (Angular.js / jQuery)",
                topic: "Consulting Lead Developer at MisterAuto",
                project: "E-Commerce Website V2",
                stack: "PHP (ZE), JS (Angular.js / jQuery)"
            }
        },
        {
            name: "PHP Symfony Engineer Consultant",
            company: "Abbeal",
            client: "SmartTraffiK",
            companyLogoSrc: "/src/assets/img/companies/logo-abbeal.png",
            clientLogoSrc: "/src/assets/img/companies/logo-st.png",
            start: dayjs(new Date(2017, 8, 15)),
            end: dayjs(new Date(2017, 11, 28)),
            description: "Product Website V2 => approach SaaS as much as possible with SOA<br />" +
                "The goal was to leave the “unmaintainable custom-made\" from the legacy and make all customers merge on one platform.<br />" +
                "- Frequent meetings for tech and architectural choices for upcoming features<br />" +
                "- Development of APIs, user management, user authorization<br />" +
                "- Setting and polishing Git process with an Abbeal co-worker<br />" +
                "- Agility with all processes with the dev team and the PO<br />" +
                "- Code reviewing and resolving conflicts, peer-coding with teammates from both backend and frontend<br />" +
                "Team composed of 4 backend dev, 3 frontend dev, 1 PO, 1QA, 1 CTO<br />",
            summary: {
                fullSummary: "Topic : Mission at client SmartTraffiK<br />" +
                    "Project : SaaS project V2<br />" +
                    "Tech Stack : PHP (Symfony), JS (jQuery)",
                topic: "Consulting at SmartTraffiK",
                project: "SaaS project V2",
                stack: "PHP (Symfony), JS (jQuery)"
            }
        },
        {
            name: "PHP Symfony Engineer Consultant",
            company: "Abbeal",
            client: "Xotelia",
            companyLogoSrc: "/src/assets/img/companies/logo-abbeal.png",
            clientLogoSrc: "/src/assets/img/companies/logo-xotelia.png",
            start: dayjs(new Date(2017, 1, 13)),
            end: dayjs(new Date(2017, 9, 13)),
            description: "Web Software solution allowing customers to manage all their bookings/prices/availabilities on one platform. <br />" +
                "Our role (2 consultants) was taking back all projects following the ITs' departure => prevent and fix shutdowns and possible errors<br />" +
                "Handover of three weeks for two big projects :<br />" +
                "- Backoffice Symfony2+Legacy (Internal framework)<br />" +
                "- Symfony3 project managing all the process of bookings<br />" +
                "Managing servers and whole stack with CircleCI, Sentry, Datadog, RabbitMQ, Graphana and transverse projects<br />" +
                "Opening new connections and managing existing ones (around 100 partners such as Booking.com, Airbnb, Expedia..)<br />" +
                "Regular meeting between Support and ITs to express needs; find solutions and prioritize developments or fixes<br />" +
                "Code review + test<br />",
            summary: {
                fullSummary: "Topic : Mission at client Xotelia<br />" +
                    "Project : Take on the project as main developer<br />" +
                    "PHP (Internal Framework + Symfony), JS (jQuery)",
                topic: "Consulting at Xotelia",
                project: "Take on the project as Main developer",
                stack: "PHP (Internal Framework + Symfony), JS (jQuery)"
            }
        },
        {
            name: "PHP Engineer Consultant",
            company: "SQLI",
            client: "LDLC Group",
            companyLogoSrc: "/src/assets/img/companies/logo-sqli.png",
            clientLogoSrc: "/src/assets/img/companies/logo-ldlc.png",
            start: dayjs(new Date(2016, 9, 3)),
            end: dayjs(new Date(2017, 1, 10)),
            description: "Transfer and taking in hand the project LDLC.PRO with an internal PHP framework<br />" +
                "Setting up Git + Jenkins<br />" +
                "Small project to simplify Sales team<br />" +
                "The new big project should have been a PHP Symfony brand new project, " +
                "such as why I was recruited but ended up being a .NET patch of the old website. " +
                "I took the opportunity to join Abbeal at that time to match my expectation and my skills",
            summary: {
                fullSummary: "Topic : Mission at client LDLC<br />" +
                    "Project : Take on the pro website as main developer<br />" +
                    "Tech Stack : PHP (Internal Framework), JS (jQuery)",
                topic: "Mission at client LDLC",
                project: "Take on the pro website as main developer",
                stack: "PHP (Internal Framework), JS (jQuery)"
            }
        },
        {
            name: "PHP Engineer Apprentice",
            company: "CCSD/CNRS",
            client: "",
            companyLogoSrc: "/src/assets/img/companies/logo-cnrs.png",
            clientLogoSrc: "",
            start: dayjs(new Date(2013, 8, 1)),
            end: dayjs(new Date(2016, 8, 1)),
            description: "As I joined my Engineer school as an Apprentice, I've choosen the CCSD/CNRS company " +
                "for three years of collaboration<br />" +
                "I have been working on three different projects each year to improve myself in the web technologies<br />" +
                "<u><b>First year :</b></u><br />" +
                "Developing a backoffice to manage thumbnails hosted by the main project (HAL) " +
                "(snapshots showing content of documents). I developed both the UI, the features and made a tool to " +
                "manage and see status of all the thumbnails above the DB<br />" +
                "<u><b>Second year :</b></u><br />" +
                "Had the opportunity to try and work as DevOps, I managed the whole IT machines corpus " +
                "to upgrade from an old deployment tool to a newer one, SaltStack. I migrated the existing modules " +
                "and developped new ones<br />" +
                "<u><b>Third Year :</b></u><br />" +
                "I developed on Symfony a module to plug on an existing website (Sciencesconf.org) and " +
                "create, manage, update the schedule of the conferences/colloques",
            summary: {
                fullSummary: "Topic : Three years apprenticeship as an Engineer at CCSD/CNRS<br />" +
                    "Projects : Three projects (each year) focused on web development" +
                    "Tech Stack : PHP (Vanilla + Symfony), JS (jQuery)",
                topic: "Three years apprenticeship as an Engineer at CCSD/CNRS",
                project: "Three projects (each year) focused on web development",
                stack: "PHP (Vanilla + Symfony), JS (jQuery)"
            },
        }
    ]
};

const getters = {
    getExperienceSectionTitle: (state) => {
        return state.experienceSectionTitle;
    },
    getExperienceView: (state) => {
        return state.experienceView;
    },
    getExperiences: (state) => {
        return state.experiences;
    }
};
const mutations = {
    setExperienceView: (state, payload) => {
        state.experienceView = payload;
    }
};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
};