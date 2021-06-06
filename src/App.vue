<template>
  <div id="app">
    <div>
      <Header class="py-3"/>
      <router-view></router-view>
      <router-link to="/user/signup/">go to signup</router-link> |
      <router-link to="/user/signin/">go to signin</router-link> |
      <router-link to="/translate/">go to Translate</router-link> |
      <router-link to="/book/">go to MyBook</router-link>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    Header,
  },
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
