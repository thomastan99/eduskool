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
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Login",

  components: [],

  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    return {
      login_form,
      login,
    };
  },
};
</script>

<style scoped>
input {
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  height: 30px;
}

input[type="submit"] {
  border-radius: none;
  font-size: 20px;
  padding: 0;
  border: none;
  background: none;
  text-decoration: underline;
}

input[type="submit"]:hover {
  color: rgb(22, 25, 231);
  font-size: 20px;
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
  width: 100px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
}

p {
  font-weight: bold;
  font-size: 25px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>