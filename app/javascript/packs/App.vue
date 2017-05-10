<template lang="pug">
  div
    div#header
      <router-link to="/">
        img(src='./assets/images/audiofrag.png')
      </router-link>
      div#nav
        <router-link to="/">Home</router-link>
        <router-link to="/upload">upload</router-link>
      div.clearfix

    div#wrapContent
      <router-view></router-view>
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