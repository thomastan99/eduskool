<template>
  <div id="loggingIn">
    <img src="../assets/eduLogo.png" />
    <form id="loginForm" class="register" @submit.prevent="login">
      <h1 class="title">Login to eduSkool</h1>
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="login_form.email" /><br />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        v-model="login_form.password"
      /><br />
      <input type="submit" value="Login" />
    </form>
    <a href="/"> Back to Register </a>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
 const login_form = ref({});

export default {
  name: "Login",

  components: [],
  

  setup() {
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
      console.log(login_form.value.email)
    };
    

    return {
      login_form,
      login,
    };
  },


};

export const loginData = login_form.value.email
</script>

<style scoped>
input {
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  height: auto;
  font-size: 25px;
}

input[type="submit"] {
  border-radius: none;
  font-size: 30px;
  border: none;
  background: none;
  text-decoration: underline;
}

input[type="submit"]:hover {
  color: rgb(22, 25, 231);
}

.title {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  /* padding-top: 10px; */
}

#loggingIn {
  text-align: center;
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(228, 218, 218, 0.6),
      rgba(131, 125, 125, 0.6)
    ),
    url("../assets/teacher2.jpg");
  background-size: cover;
}

#loginForm {
  align-self: right;
  /* min-height:100vh; */
}

label {
  display: inline-block;
  text-align: right;
  width: 150px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 30px;
}

p {
  font-weight: bold;
  font-size: 25px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

h1 {
  font-size: 40px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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