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
      input(type="text", v-model="audio.comment")
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
    name: 'audios',
    data () {
      return {
        msg: 'This is Upload2!!!',
        audio: {
          title: '',
          filename: '',
          comment: ''
        }
      }
    },
    methods: {
      onClick () {
        console.log('click');
      },
      update (e) {
        // タイトルが変更されたとき 例えばこういう処理する
        this.$data.audio.filename = `${encodeURI(e.target.value)}.mp3`;
      }
    },
    mounted () {
      this.$data.audio.comment = 'Component mounted, and set comment...'
    }
  }
</script>
