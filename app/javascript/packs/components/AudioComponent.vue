<template lang="pug">
  .panel.panel-default
    .panel-heading {{ audio.title }}
    .panel-body
      | {{ audio.filename }}
      | {{ audio.description }}
      | {{ audio.descuser_idription }}将来的にユーザー名をサーバーからとって置いてここに表示したい
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
