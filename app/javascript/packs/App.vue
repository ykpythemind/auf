<template lang="pug">
  div#app
    header
      ui-toolbar(title="Audiofrag" remove-brand-divider="true" brand="book app" type="colored" textColor="white" @nav-icon-click="linkToHome")
        div#nav
          ul
            li
              ui-icon-button(type="secondary")
                router-link(to="/") Home
            li
              ui-icon-button(type="secondary")
                router-link(to="/upload") Upload
      div.clearfix

    div.wrapContent
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
        console.log('aaaaaaa');
        this.$router.push('/upload');
      }
    }
  }
</script>
