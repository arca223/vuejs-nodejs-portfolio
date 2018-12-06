<template>
    <div class="row ui inverted segment">
        <div class="ui inverted secondary pointing menu">

            <img class="ui small circular image profile-picture"
                 src="https://picsum.photos/200/200?random"/>

            <h1 class="item header-name">
                M. Le Coq
            </h1>


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
    .profile-picture {
        margin: 1em 0 0 1em;
    }
    .header-name {
        height: 100px;
        display: table-cell;
        vertical-align: middle;
    }
</style>
