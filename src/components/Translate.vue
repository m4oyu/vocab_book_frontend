<template>
  <b-card class="container">
    <!-- <h1>Translate</h1> -->
    <div class="d-flex flex-row">
      <b-form-group
        label="英語"
        label-size="lg"
        label-for="english-textarea"
        class="d-inline w-50"
      >
        <b-form-textarea
          id="english-textarea"
          class="input_form"
          v-model="english"
          placeholder="Enter something ..."
          rows="8"
          size="lg"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        label="日本語"
        label-size="lg"
        label-for="japanese-textarea"
        class="d-inline w-50"
      >
        <b-form-textarea
          id="japanese-textarea"
          class="input_form"
          v-model="japanese"
          rows="8"
          disabled
          size="lg"
        ></b-form-textarea>
      </b-form-group>
    </div>

    <b-button @click="Translate" block variant="primary" class="mt-4 mb-4"
      >Translate</b-button
    >
  </b-card>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  name: "Translate",
  data() {
    return {
      english: "",
      japanese: "",
    };
  },
  methods: {
    Translate: function() {
      let self = this;
      axios({
        method: "post",
        url: "http://35.194.22.235/auth/translate",
        headers: {
          Authorization: "Bearer " + this.getCookie(),
        },
        data: {
          text: this.english,
        },
      }).then(function(response) {
        console.log(response.data.text);
        self.japanese = response.data.text;
      });
    },
    setCookie: function(token) {
      Vue.$cookies.config("7d");
      Vue.$cookies.set("vocab_book_cookie", token);
    },
    getCookie: function() {
      return Vue.$cookies.get("vocab_book_cookie");
    },
  },
};
</script>

<style scoped></style>
