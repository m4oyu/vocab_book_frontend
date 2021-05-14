<template>
  <div>
    <form action="login-form" >
      <p>
        <label for="name">English:</label>
        <input v-model="english">
      </p>
      <p>
        <label for="name">Japanese:</label>
        <input v-model="japanese">
      </p>
      <p>
        <input @click="Translate" type="button" value="translate">
      </p>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default {
  name: "Translate",
  data() {
    return {
      english: '',
      japanese: '',
    }
  },
  methods: {
    Translate: function(){
      axios.post('http://localhost:80/auth/translate', {
        text: this.english
      })
      .then(function(response){
        console.log("translate" + this.english + "succeed");
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