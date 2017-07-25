<template lang="pug">
  div.wrapAudios
    div.formWraper
      div
        ui-fileupload(name="file_to_upload")
      div
        ui-textbox(label="Song Name" placeholder="Enter the song's name" v-model="audio.title" v-on:input="update")
      div
        ui-textbox(label="File name" placeholder="filename" v-model="audio.filename")
      div
        ui-textbox(label="Description" placeholder="description of song" v-model="audio.description")
      div
        ui-button(buttonType="submit" color="primary" @click="uploadAudioFile(audio)") 送信
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'UploadForm',
    data () {
      return {
        defaultDescription: 'Component mounted, and set description...',
        audio: {
          title: '',
          filename: '',
          description: '',
          user_id: 1
        }
      }
    },
    methods: {
      ...mapActions(['uploadAudio']),
      uploadAudioFile (audio) {
        this.uploadAudio({ audio });
        this.audio = {
          title: '',
          filename: '',
          description: this.defaultDescription,
          user_id: 1
        };
      },
      update (value) {
        // タイトルが変更されたとき 例えばこういう処理する
        this.$data.audio.filename = `${encodeURI(value)}.mp3`;
      }
    },
    mounted () {
      this.$data.audio.description = this.defaultDescription;
    }
  }
</script>
