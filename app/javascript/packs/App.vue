<template lang="jade">
    div
        div#header
            a(href='./')
                img(src='/images/audiofrag.png')
            div#nav
                <router-link to="/">Home</router-link>
                <router-link to="/upload">upload</router-link>
            div.clearfix

        div#wrapContent
            <router-view></router-view>
</template>

<script>
    export default {
        data () {
            return {
                loading: false
            }
        }
    }
</script>