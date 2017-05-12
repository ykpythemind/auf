<template lang="pug">
  div
    Audios
    div
      h2(v-on:click='getTest("bbbbb")')
        | {{message}}
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
