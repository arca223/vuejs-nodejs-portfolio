<template>
    <div class="row ui inverted segment">
        <div class="ui inverted secondary pointing menu">
            <img class="ui small circular image centered"
                 src="https://picsum.photos/200/200?random"
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
            <div class="right menu align-vertical">
                <router-link
                    v-for="link in links"
                    :key="link.id"
                    class="item white-tabs"
                    :class='{"active": (activeRoute === link.name)}'
                    :to="link.url">
                    {{ link.text }}
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "activeRoute"
        ],
        data: () => {
            return {
                links: [
                    {
                        "name": "home",
                        "text": "Home",
                        "url": "/"
                    },
                    {
                        "name": "about",
                        "text": "About",
                        "url": "/about"
                    },
                    {
                        "name": "contact",
                        "text": "Contact",
                        "url": "/contact"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .header-title {
        display: block;
        text-align: center;
        padding-top: 2em;
    }
</style>
