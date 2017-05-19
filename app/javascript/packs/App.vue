<template lang="pug">
  div#app
    div#header
      router-link(to="/")
        img(src='./assets/images/audiofrag.png')

      div#nav
        ul
          li
            router-link(to="/") Home
          li
            router-link(to="/upload") Upload
      div.clearfix

    div#wrapContent
      transition(name="router" mode="out-in")
        router-view.router-view
</template>

<script>
  export default {
    data () {
      return {
        loading: false
      }
    }
  }
</script>