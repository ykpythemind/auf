<template lang="pug">
  div.wrapAudios
    h1 titletitle
    form(method="post", enctype="multipart/form-data", action="./upload")
      input(type="file", name="file_to_upload")
      div
      label name
      input(type="text", name="songname")
      div
      label comment
      input(type="text", name="comment")
      input(type="submit")
</template>

<script>
  export default {
    name: 'audios',
    data () {
      return {
        msg: 'This is Upload2!!',
      }
    }
  }
</script>