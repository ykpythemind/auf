<template lang="pug">
  .card
    .card-block
      h4.card-title {{ audio.title }}
      h6.card-subtitle.mb-2.text-muted ファイル名 | {{ audio.filename }}
      p.card-text
        | {{ audio.description }} 将来的にユーザー名をサーバーからとって置いてここに表示したい
      router-link.card-link(to="/upload") Upload
      a.card-link(href='#') Another link
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
