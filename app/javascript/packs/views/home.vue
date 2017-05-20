<template lang="pug">
  div
    div.container
      div.row
        div.col-sm-6.col-sm-offset-3
          h1 トップページです:)
          UploadForm
          div(style="margin-top: 60px;")
            AudioList(v-bind:audios="audios")
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
      };
    },
    methods: {
      fetchAfterLoaded () {
        this.fetchAudios()
      },
      ...mapActions(['fetchAudios'])
    },
    computed: {
      ...mapGetters({
        audios: 'audios'
      })
    },
    mounted () {
      this.fetchAfterLoaded()
    }
  }
</script>
