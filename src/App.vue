<template>
  <div id="app">
    <div>
      <router-link to="/user/signup/">go to signup</router-link> |
      <router-link to="/user/signin/">go to signin</router-link> |
      <router-link to="/translate/">go to Translate</router-link> |
      <router-link to="/book/">go to MyBook</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
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
