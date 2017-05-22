<template lang="pug">
  div
    div.container
      div TOPです
      .card
        .card-block
          h4.card-title Card title (Card Styleのテスト)
          h6.card-subtitle.mb-2.text-muted Card subtitle
          p.card-text
            | Some quick example text to build on the card title and make up the bulk of the card's content.
          router-link.card-link(to="/upload") Upload
          a.card-link(href='#') Another link
      div
        h2(v-on:click='getTest("bbbbb")') | {{message}}
      div.row
        div.col-sm-6.col-sm-offset-3
          div(style="margin-top: 60px;")
            AudioList(v-bind:audios="audios")
</template>

<style scoped>

</style>

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
