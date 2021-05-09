<template>
  <div class="login-wrapper">
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
        <input @click="Login" type="submit" value="submit">
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data() {
    return {
      mail: '',
      password: ''
    }
  },
  methods: {
    Login: function(){
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
    }
  }
}
</script>
