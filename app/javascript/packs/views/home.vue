<template lang="pug">
  div
    div.container
      div.row
        div.col-sm-6.col-sm-offset-3
          h1 トップページです:)
          UploadForm
          div
            h2(v-on:click='getTest("bbbbb")')
              | {{message}}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import UploadForm from '../components/uploadform.vue';

  export default {
    name: 'Home',
    components: {
      UploadForm
    },
    methods: mapActions(['getTest']),
    computed: mapGetters(['message'])
  }
</script>
