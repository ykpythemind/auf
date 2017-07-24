<template lang="pug">
  div
    div.container
      div.row
        div.col-sm-4
          UploadForm
        div.col-sm-7.offset-sm-1
          AudioList(v-bind:audios="audios")
</template>

<style scoped>

</style>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import UploadForm from '../components/Uploadform.vue';
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
