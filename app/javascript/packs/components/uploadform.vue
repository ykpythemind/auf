<template lang="pug">
  div.wrapAudios
    h1 titletitle
    form(method="post", enctype="multipart/form-data", action="./upload")
      div
        ui-fileupload(name="file_to_upload")
      div
        ui-textbox(label="Song Name" name="songname" placeholder="Enter the song's name" v-model="uploadBody.songname")
      div
      label
        ui-textbox(label="Comment" name="comment" placeholder="comment of song" v-model="uploadBody.comment")
      div
        ui-button(buttonType="submit" color="primary") 送信
</template>

<script>
  export default {
    name: 'audios',
    data () {
      return {
        msg: 'This is Upload2!!!',
        uploadBody: {}
      }
    }
  }
</script>
