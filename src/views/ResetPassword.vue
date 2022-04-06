<template>
  <div id="resetPassword">
    <div id="logo">
      <img
        src="../assets/elogo.png"
        onclick="location.href='/'"
        alt="EDU'skool logo"
      />
      <h2 id="about" onclick="location.href='/about'">About Us</h2>
      <h2 id="help" onclick="location.href='/help'">Help</h2>
    </div>
    <form
      id="resetPasswordForm"
      class="resetPassword"
      @submit.prevent="resetPassword"
    >
      <h1 class="title">Enter your email to reset your password</h1>
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="resetPassword_form.email" /><br />
      <br />
      <input type="submit" value="Send Reset Request" />
    </form>

    <a href="/"> Back to Login </a>
  </div>
</template>

<script>
import { ref } from "vue";

import { useStore } from "vuex";

const resetPassword_form = ref({});

export default {
  name: "ResetPassword",

  components: [],

  setup() {
    const store = useStore();

    const resetPassword = () => {
      store.dispatch("resetPassword", resetPassword_form.value);
      console.log(resetPassword_form.value.email);
    };

    return {
      resetPassword_form,
      resetPassword,
    };
  },
};

export const resetPasswordData = resetPassword_form.value.email;
</script>

<style scoped>
#about:hover,
#help:hover,
img:hover {
  cursor: pointer;
}
@media all and (max-width: 900px) {
  #about,
  #help {
    display: none;
    visibility: hidden;
  }
}
img {
  position: relative;
  left: 80px;
}
#about {
  top: 10px;
  float: right;
  position: relative;
  right: 200px;
  color: black;
}
#help {
  top: 9px;
  position: relative;
  float: right;
  color: black;
}
#logo {
  background-color: #00bcd4;
}
input {
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  height: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
}

input[type="submit"] {
  border-radius: 8px;
  font-size: 15px;
  height: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

input[type="submit"]:hover {
  color: rgb(22, 25, 231);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
}

.title {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  /* padding-top: 10px; */
}

#resetPassword {
  text-align: center;
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(228, 218, 218, 0.9),
      rgba(131, 125, 125, 0.6)
    ),
    url("../assets/teacher2.jpg");
  background-size: cover;
}

#resetPasswordForm {
  margin-top: 100px;
  align-self: right;
  /* min-height:100vh; */
}

label {
  display: inline-block;
  text-align: right;
  width: 150px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-right: 50px;
}

p {
  font-weight: bold;
  font-size: 25px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 25px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-bottom: 30px;
}

a {
  margin-right: 130px;
  margin-left: 130px;
  /*   background-color:rgb(217, 224, 224);
  border-radius: 8px; */
  padding: 8px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: rgb(68, 68, 70);
  padding-bottom: 2s0px;
  font-size: 25px;
  text-decoration: none;
}

a:hover {
  color: rgb(19, 20, 20);
  text-decoration: underline;
}
</style>