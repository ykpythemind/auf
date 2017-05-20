<template lang="pug">
  div#app
    header
      ui-toolbar(title="Audiofrag" type="colored" textColor="white" @nav-icon-click="linkToHome")
        nav(slot="actions")
          router-link(to="/")
            ui-icon home
          router-link(to="/upload")
            ui-icon file_upload
      div.clearfix

    transition(name="router" mode="out-in")
      router-view.router-view
</template>

<script>
  export default {
    data () {
      return {
        loading: false
      }
    },
    methods: {
      linkToHome () {
        this.$router.push('/upload');
      }
    }
  }
</script>
