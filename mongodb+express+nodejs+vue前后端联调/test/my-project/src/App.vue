<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="getData()">点击</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function () {
    // this.$axios({
    //   method: 'get',
    //   url: '/init'
    // }).then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    getData () {
      this.$axios({
        // method: 'post',
        method: 'get',
        url: '/line'
      }).then(res => {
        var a = JSON.stringify(res)
        console.log(a)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
