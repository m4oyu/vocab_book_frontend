<template>
  <b-container class="">
    <b-container class="d-flex align-items-center">
      <b-icon-x class="col-1" scale="2"></b-icon-x>
      <h1 class="col-10">Review</h1>
    </b-container>

    <b-container>
      <b-card>
        <b-container class="my-5">
          <p class="text">{{ this.books[this.showID].english }}</p>
          <p class="text" v-bind:class="{ active: show }">
            {{ this.books[this.showID].japanese }}
          </p>
        </b-container>

        <b-container class="d-flex justify-content-end">
          <b-button
            @click="show = !show"
            pill
            size="lg"
            variant="secondary"
            class="col-3"
            >答え</b-button
          >
        </b-container>
      </b-card>
    </b-container>

    <b-container>
      <b-button @click="NextVocab" squared variant="secondary" class="col-6"
        >わからない</b-button
      >
      <b-button @click="NextVocab" squared variant="success" class="col-6"
        >わかる</b-button
      >
    </b-container>
  </b-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import server from "../constant/constant";

export default {
  name: "MyBook",
  data() {
    return {
      show: true,
      books: [
        {
          english: "ここに英語が表示されます",
          japanese: "ここに訳が表示されます",
        },
      ],
      showID: 0,
    };
  },
  created() {
    this.FetchMyBooks();
  },
  methods: {
    FetchMyBooks: function() {
      // 整形の必要性あり
      let self = this;
      var url = server.data().server + "/auth/userBook";
      axios({
        method: "get",
        url: url,
        headers: {
          Authorization: "Bearer " + this.getCookie(),
        },
      }).then(function(response) {
        console.log(response.data.userBooks);
        // var count = 0;
        response.data.userBooks.forEach((el) => {
          self.books.push({
            english: el.english,
            japanese: el.japanese,
          });
          // count++;
        });
      });
    },
    NextVocab: function() {
      this.show = true;
      this.showID++;
    },
    getCookie: function() {
      return Vue.$cookies.get("vocab_book_cookie");
    },
  },
};
</script>

<style scoped>
.active {
  visibility: hidden;
}
.text {
  font-size: large;
}
.close_icon {
  font-size: 50px;
}
</style>
