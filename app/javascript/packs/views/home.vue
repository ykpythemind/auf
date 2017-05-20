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
          div(style="margin-top: 60px;")
            AudioList(@audios="audios")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import UploadForm from '../components/uploadform.vue';
  import AudioList from '../components/AudioList.vue';

  export default {
    name: 'Home',
    components: {
      UploadForm,
      AudioList
    },
    data () {
      return {
        audios: []
      };
    },
    methods: {
      fetchAfterLoaded () {
        this.fetchAudios()
      },
      ...mapActions(['getTest', 'fetchAudios'])
    },
    computed: {
      ...mapGetters({
        message: 'message',
        getAudios: 'fetchAudios'
      })
    },
    mounted () {
      this.fetchAfterLoaded()
    }
  }
</script>
