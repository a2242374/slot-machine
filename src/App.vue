<template>
  <div id="app">
    <Tiger/>
  </div>
</template>

<script>
import Tiger from './components/tiger/Tiger'

export default {
  name: 'App',
  components: {
    Tiger
  }
}
</script>

<style>
body{
  background:#FFEFDA;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
