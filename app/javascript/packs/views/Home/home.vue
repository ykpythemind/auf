<template>
    <div>
        <Audios></Audios>
        <div>
            <h2 v-on:click='getTest("bbbbb")'>{{message}}</h2>
        </div>
    </div>
</template>

<script>
    import Audios from '../../components/audios/index.vue';
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'audios',
        components: {
            Audios
        },
        methods: mapActions(['getTest']),
        computed: mapGetters(['message'])
    }
</script>
