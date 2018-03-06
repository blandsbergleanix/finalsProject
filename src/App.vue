<template>
  <div id="app">
    <img src="./assets/logo.svg">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    this.$lx.init()
      .then(setup => {
        this.$lx.ready({})
      })
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
  #app
    display flex
    flex-flow column
    justify-content center
    align-items center
</style>
