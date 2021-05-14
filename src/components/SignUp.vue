<template>
  <div class="login-wrapper">
    <h1>signup</h1>
    <form action="login-form" >
      <p>
        <label for="name">User:</label>
        <input v-model="mail">
      </p>
      <p>
        <label for="name">Password:</label>
        <input v-model="password">
      </p>
      <p>
        <input @click="SignUp" type="button" value="submit">
      </p>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default {
  name: "SignUp",
  data() {
    return {
      mail: '',
      password: '',
    }
  },
  methods: {
    SignUp: function(){
      axios.post('http://localhost:80/signup', {
        mail:     this.mail,
        password: this.password
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    setCookie: function(token){
      Vue.$cookies.config('1d');
      Vue.$cookies.set(this.mail, token);
    },
    getCookie:function(){
      return Vue.$cookies.get(this.mail);
    }
  }
}
</script>
