<template>
    <div class="row ui inverted segment">
        <div class="ui inverted secondary pointing menu">
            <img class="ui small circular image centered"
                 src="../../../public/assets/img/profile-pict-logo.png"
                 alt="profile-picture"
                 onerror="replaceImg(this)"/>
            <div class="header-title">
                <div>
                    <h1>M. Le Coq</h1>
                </div>
                <br />
                <div>
                    <p>Welcome to my Portfolio, enjoy browsing around!</p>
                </div>
            </div>
            <div class="social-networks">
                <a :key="sn.id" v-for="sn in socialNetworks" :href="sn.link" target="_blank"><i :class="sn.icon" class="inverted big icon"></i></a>
            </div>
            <div class="right menu align-vertical">
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
        data: () => {
            return {
                links: [
                    {
                        name: "home",
                        url: "/"
                    },
                    {
                        name: "experiences",
                        url: "/experiences"
                    },
                    {
                        name: "skills",
                        url: "/skills"
                    },
                    {
                        name: "about",
                        url: "/about"
                    },
                    {
                        name: "contact",
                        url: "/contact"
                    },
                ],
                socialNetworks: [
                    {
                        name: "linkedin",
                        link: "https://www.linkedin.com/in/maxime-cocquempot-866944b2",
                        icon: "linkedin",
                    },
                    {
                        name: "github",
                        link: "https://github.com/arca223",
                        icon: "github",
                    },
                ],
            }
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
        padding-top: 2em;
    }
    .social-networks {
        position: absolute;
        float: right;
        top: 2em;
        right: 2em;
    }
    .icon {
        opacity: 0.8;
    }
    .icon:hover {
        transform: scale(1.2, 1.2);
        opacity: 1;
    }
</style>
