<template>
  <div id="app">
    <div id='nav'>
      <router-link to='/'>Home</router-link> |
      <router-link to='/order'>Order</router-link> |
      <router-link to='/brands'>Brands</router-link> |
      <router-link to='/brands/new'>New Brand</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
//
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
