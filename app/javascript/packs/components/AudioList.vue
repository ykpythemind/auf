<template lang="pug">
  div
    div(v-for="audio in audios")
      AudioComponent(v-bind:audio="audio")
</template>

<script>
  import AudioComponent from './AudioComponent.vue';

  export default {
    components: {
      AudioComponent
    },
    props: ['audios']
//    props: {
//      audios: {
//        type: Array,
//        default: () => {
//          return [];
//        }
//      }
//    }
  }
</script>
