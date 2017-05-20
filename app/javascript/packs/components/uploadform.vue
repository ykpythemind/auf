<template lang="pug">
  div.wrapAudios
    h1 {{msg}}
    div
      input(type="file", name="file_to_upload")
      div
      label title
      input(type="text", v-model="audio.title" v-on:input="update")
      div
      label filename
      input(type="text", v-model="audio.filename")
      div
      label comment
      input(type="text", v-model="audio.description")
      input(type="submit" @click="onClick").button
</template>

<style scoped>
  input {
    width: 300px;
    margin-bottom: 25px;
  }
  .button {
    width: 50px;
    margin: 5px;
  }
</style>

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
