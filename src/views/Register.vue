<template>
  <div id="registration">
      <img src="../assets/eduLogo.png" />
    <form id="registrationForm" class="register" @submit.prevent="register">
      <h1 class="title">Register for eduSkool</h1>
      <label for="fname">First name:</label>
      <input type="text" id="fname" v-model="register_form.fname" /><br />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" v-model="register_form.lname" /><br />
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="register_form.email" /><br />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        v-model="register_form.password"
      /><br />
      <label for="password-confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password-confirmation"
        v-model="register_form.password_confirmation"
      />
      <p>Choose your role for eduSkool:</p>
      <input
        type="radio"
        id="teacher"
        name="role"
        value="Teacher"
        v-model="register_form.role"
      />
      <label for="teacher">Teacher</label><br />
      <input
        type="radio"
        id="student"
        name="role"
        value="Student"
        v-model="register_form.role"
      />
      <label for="student">Student</label> <br />
      <input type="submit" value="Register" />
    </form>
    <div id="loginBtns">
      <p>Already have an account?</p>
      <a href="/login" class="loginBtn">Login</a
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Registration",

  components: [
  ],

  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      register_form,
      register,
    };
  },
};
</script>

<style scoped>
a {
 margin-right: 130px;
  margin-left: 130px;
  /*   background-color:rgb(217, 224, 224);
  border-radius: 8px; */
  font-size: 28px;
  padding: 8px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: black;
  padding-bottom: 2s0px;
}

a:hover {
  color: rgb(101, 181, 235)
}


input {
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  height: 30px;
}
input[type="submit"] {
  /* background-color: rgb(217, 224, 224); */
  border-radius: 8px;
  font-size: 20px;
}

input[type="submit"]:hover {
  background-color: rgb(230, 46, 40);
  border-radius: 8px;
  font-size: 20px;
}

.title {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  /* padding-top: 10px; */
}

#registration {
  text-align: center;
  min-height: 100vh;
    background-image: linear-gradient(rgba(228, 218, 218, 0.6),
        rgba(131, 125, 125, 0.6)), url("../assets/teacher2.jpg");
  background-size: cover;
}

#registrationForm {
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