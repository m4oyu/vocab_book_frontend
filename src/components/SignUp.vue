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
        <input @click="SignUp" type="submit" value="submit">
      </p>
    </form>
    <div>
      <p>{{ cookie }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "SignUp",
  data() {
    return {
      mail: '',
      password: '',
    }
  },
  computed: {
    cookie() {
      return this.$cookies.get(this.mail);
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
      this.$cookies.config('1d');
      this.$cookies.set(this.mail, token);
    },
    getCookie:function(){
      console.log(this.$cookies.get("token"));
      return this.$cookies.get(this.mail);
    }
  }
}
</script>
