<template lang="pug">
  .card
    p 将来的にユーザー名をサーバーからとって置いてここに表示したい
    .card-block
      div.clearfix.overflow
        h4.card-title.float-left {{ audio.title }}
        h6.float-right {{ audio.created_at | moment }}
      p.card-subtitle.mb-2.text-muted {{ audio.filename }}
      p.card-text
        | {{ audio.description }}
      router-link.card-link(to="/upload") Upload
      a.card-link(href='#') Another link
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      audio: {
        title: String,
        filename: String,
        description: String,
        created_at: String,
        user_id: Number
      }
    },
    filters: {
      moment: (date) => {
        return moment(date).format('YYYY-MMMM-Do');
      }
    }
  }
</script>
