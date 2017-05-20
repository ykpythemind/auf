<template lang="pug">
  div
    h2 {{ audio.name }}
    h2 {{ audio.comment }}
</template>

<script>
  export default {
    props: {
      audio: {
        title: String,
        filename: String,
        description: String,
        user_id: Number
      }
    }
  }
</script>
