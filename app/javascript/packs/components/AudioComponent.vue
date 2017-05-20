<template lang="pug">
  div
    h2 {{ audio.title }}
    h2 {{ audio.filename }}
</template>

<script>
  export default {
    props: ['audio']
//    props: {
//      audio: {
//        title: String,
//        filename: String,
//        description: String,
//        user_id: Number
//      }
//    }
  }
</script>
