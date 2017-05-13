<template lang="pug">
  div
    UploadForm
    div
      h2(v-on:click='getTest("bbbbb")')
        | {{message}}
</template>

<script>
  import UploadForm from '../components/uploadform.vue';
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'audios',
    components: {
      UploadForm
    },
    methods: mapActions(['getTest']),
    computed: mapGetters(['message'])
  }
</script>
