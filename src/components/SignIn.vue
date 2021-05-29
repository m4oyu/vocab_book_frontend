<template>
  <div class="container">
    <b-container fluid class="border">
      <h1 class="mt-4 mb-5">SignIn</h1>
      <b-row class="m-3">
        <b-col sm="2">
          <label for="input-user">User</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-user"
            placeholder="Enter your mail"
            v-model="mail"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="m-3">
        <b-col sm="2">
          <label for="input-password">Key</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-password"
            placeholder="Enter your key"
            v-model="password"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-button @click="SignIn" block variant="primary" class="mt-3 mb-4">SignIn</b-button>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "SignIn",
  data() {
    return {
      mail: '',
      password: '',
    };
  },
  methods: {
    SignIn: function() {
      axios({
          method: "post",
          url: "http://35.194.22.235:80/login",
          data: {
            mail: this.mail,
            password: this.password,
          },          
        })
        .then(function(response) {
          console.log("axios.post succeed");
          Vue.$cookies.config("7d");
          Vue.$cookies.set("vocab_book_cookie", response.data.token);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 200%;
  margin: 3%;
}
@media (max-width: 767px) {
  .container{
    width: 375px;
  }
}
@media (min-width: 768px) {
  .container{
    width: 50%;
  } 
}
</style>