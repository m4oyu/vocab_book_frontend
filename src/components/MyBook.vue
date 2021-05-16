<template>
  <div>
    <h1>My Book</h1>
    <b-button @click="FetchMyBooks" block variant="primary" class="mt-4 mb-4">Fetch</b-button>
    <b-table striped hover :items="books"></b-table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';
export default {
  name: "MyBook",
  data() {
    return {
      books: [],
    };
  },
  methods: {
    FetchMyBooks: function() {
      let self = this;
      axios({
        method: "get",
        url: "http://localhost:80/auth/userBook",
        headers: {
          Authorization: "Bearer " + this.getCookie(), 
        },
      }).then(function(response) {
        console.log(response.data.userBooks);
        self.books = response.data.userBooks;
      });
    },
    getCookie: function() {
      return Vue.$cookies.get("vocab_book_cookie");
    }
  }
}
</script>