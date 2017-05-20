<template lang="pug">
  div
    div.container
      div TOPです
      .card
        .card-block
          h4.card-title Card title
          h6.card-subtitle.mb-2.text-muted Card subtitle
          p.card-text
            | Some quick example text to build on the card title and make up the bulk of the card's content.
          router-link.card-link(to="/upload") Upload  
          a.card-link(href='#') Another link
      div
        h2(v-on:click='getTest("bbbbb")') | {{message}}
</template>

<style scoped>

</style>

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
