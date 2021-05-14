<template>
  <div class="login-wrapper">
    <form action="login-form" >
      <h1>signin</h1>
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
import axios from 'axios'
import Vue from 'vue'

export default {
  name: "SignIn",
  data() {
    return {
      mail: '',
      password: '',
    }
  },
  methods: {
    SignUp: function(){
      axios.post('http://localhost:80/login', {
        mail:     this.mail,
        password: this.password
      })
      .then(function(response){
        console.log("axios.post succeed");
        this.setCookie(response.data.token);
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    setCookie: function(token){
      Vue.$cookies.config('7d');
      Vue.$cookies.set('vocab_book_cookie', token);
    },
    getCookie:function(){
      return Vue.$cookies.get(this.mail);
    }
  }
}
</script>
