<template>
    <div class="row ui inverted segment">
        <!-- Responsive header, composed of multiple elements managed by media screens -->
        <div class="ui inverted secondary pointing menu menu-wrapper">
            <!-- profile picture-->
            <router-link to="/">
                <img class="ui circular image profile-picture"
                     src="../../../public/assets/img/profile-pict-logo.png"
                     alt="profile-picture"
                     onerror="replaceImg(this)"/>
            </router-link>

            <!-- Title, Website Headline -->
            <div class="header-title">
                <div>
                    <h1>M. Le Coq</h1>
                </div>
                <br />
                <div class="visible-md">
                    <p>Welcome to my Portfolio, enjoy browsing around!</p>
                </div>
            </div>

            <!-- Right floating zone for icons -->
            <div class="social-networks">
                <!-- Social Networks icon links -->
                <a :key="sn.id"
                   v-for="sn in socialNetworks"
                   :href="sn.link"
                   target="_blank">
                    <i :class="sn.icon" class="inverted big icon"></i>
                </a>

            </div>

            <!-- Burger Menu -->
            <div class="right menu visible-xs">
                <span @click="displayMenu">
                    <i class="inverted huge bars icon"></i>
                </span>
            </div>

            <!-- Links to website content -->
            <div class="right menu visible-md">
                <router-link
                    :key="link.id"
                    v-for="link in links"
                    class="item white-tabs"
                    :class='{"active": (activeRoute === link.name)}'
                    :to="link.url">
                    {{ link.name|capitalize }}
                </router-link>
            </div>

            <!-- Mobile Sidebar Menu -->
            <div class="ui right thin sidebar inverted vertical menu">
                <router-link
                        :key="link.id"
                        v-for="link in links"
                        class="item white-tabs"
                        :class='{"active": (activeRoute === link.name)}'
                        :to="link.url">
                    {{ link.name|capitalize }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Capitalize from '../../filters/capitalize.js';

    export default {
        props: [
            "activeRoute"
        ],
        computed: {
            links() {
                return this.$store.getters.getLinks;
            },
            socialNetworks() {
                return this.$store.getters.getSocialNetworks;
            }
        },
        methods: {
            displayMenu() {
                $('.ui.sidebar')
                    .sidebar('setting', 'transition', 'overlay')
                    .sidebar('toggle');
            },
        },
        filters: {
            Capitalize,
        }
    }
</script>

<style scoped>
    .header-title {
        display: block;
        text-align: center;
    }
    .social-networks {
        position: absolute;
        right: 8em;
        top: 2.25em;
    }
    .profile-picture {
        max-width: 150px;
    }
    .header-title {
        padding-top: 0.75em;
        position: absolute;
        left: 32%;
    }
    .icon {
        opacity: 0.8;
    }
    .icon:hover, .profile-picture:hover {
        cursor: pointer;
        transform: scale(1.2, 1.2);
        opacity: 1;
    }
    /* Mobile media and small screens, 0 to 480 to 800px */
    @media screen and (max-width: 800px) {
        .profile-picture {
            margin-left: 1em;
            min-height: 100%;
            max-width: 55px;
            width: auto;
        }
        .visible-md {
            display: none!important;
        }
        .menu-wrapper {
            max-height: 6em;
        }
        .header-title {
            left: 42%;
        }
    }

    @media screen and (max-width: 560px) {
        .header-title {
            left: 25%;
        }
    }

    @media screen and (max-width: 420px) {
        .header-title {
            display: none;
        }
    }

    /* Above 800px screens, desktop */
    @media screen and (min-width: 800px) {
        .menu-wrapper {
            max-height: 12em;
        }
        .social-networks {
            top: 2em;
            right: 2em;
        }
        .profile-picture:hover {
            transform: scale(1.05, 1.05);
        }
        .visible-xs {
            display: none!important;
        }
        .visible-md {
            display: flex!important;
        }
    }
</style>
