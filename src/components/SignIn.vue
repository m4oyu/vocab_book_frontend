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
      <b-button @click="SignIn" block variant="primary" class="mt-3 mb-4"
        >SignIn</b-button
      >
    </b-container>
    <p>サインアップ完了。<br />こちらのフォームからサインインしてください。</p>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import server from "../constant/constant";

export default {
  name: "SignIn",
  data() {
    return {
      mail: "",
      password: "",
    };
  },
  methods: {
    SignIn: function() {
      var url = server.data().server + "/login";
      axios({
        method: "post",
        url: url,
        data: {
          mail: this.mail,
          password: this.password,
        },
      })
        .then((response) => {
          console.log("axios.post succeed");
          Vue.$cookies.config("7d");
          Vue.$cookies.set("vocab_book_cookie", response.data.token);
          this.$router.push({ name: "translate" });
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
  .container {
    width: 375px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 50%;
  }
}
</style>
