<template lang="pug">
  div
    div(v-for="audio in audios")
      Audio(audio)
</template>

<script>
  import Audio from './Audio.vue';

  export default {
    components: {
      Audio
    },
    props: {
      audios: {
        type: Array,
        default: []
      }
    }
  }
</script>
