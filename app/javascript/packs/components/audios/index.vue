<template lang="pug">
  div
    h1= title
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
    data () {
      return {
        msg: 'This is Upload2!!',
      }
    }
  }
</script>