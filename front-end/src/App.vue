<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <guitar-component/>
  </div>
</template>

<script>
import GuitarComponent from './components/GuitarComponent.vue';
export default {
  name: 'App',
  components: {
    GuitarComponent
    }
    }
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
