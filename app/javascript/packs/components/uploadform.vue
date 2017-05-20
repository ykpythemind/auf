<template lang="pug">
  div.wrapAudios
    h1 {{msg}}
    div
      div
        ui-fileupload(name="file_to_upload")
      div
        ui-textbox(label="Song Name" placeholder="Enter the song's name" v-model="audio.title" v-on:input="update")
      div
        ui-textbox(label="File name" placeholder="filename" v-model="audio.filename")
      div
        ui-textbox(label="Description" placeholder="description of song" v-model="audio.description")
      div
        ui-button(buttonType="submit" color="primary" @click="onClick") 送信
</template>

<script>
  export default {
    name: 'uploadform',
    data () {
      return {
        msg: 'This is Upload2!!!',
        audio: {
          title: '',
          filename: '',
          description: '',
          user_id: 1
        }
      }
    },
    methods: {
      onClick () {
        $.ajax({
          url: './upload.json',
          type: 'POST',
          data: {
            audio: this.$data.audio
          }
        }).done((res) => {
          console.log(res);
        }).fail((res) => {
          console.log(res);
        });
      },
      update (e) {
        // タイトルが変更されたとき 例えばこういう処理する
        this.$data.audio.filename = `${encodeURI(e.target.value)}.mp3`;
      }
    },
    mounted () {
      this.$data.audio.description = 'Component mounted, and set description...'
    }
  }
</script>
