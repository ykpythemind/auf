<template lang="pug">
  div
    div#header
      router-link(to="/")
        img(src='./assets/images/audiofrag.png')
      div#nav
        li
          router-link(to="/") Home
        li
          router-link(to="/upload") Upload
      div.clearfix

    div#wrapContent
      router-view
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