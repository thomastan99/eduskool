<template>
  <div id="registration">
    <div id="logo"><img src="../assets/elogo.png" alt="EDU'skool logo" ></div>
    <form id="registrationForm" class="register" @submit.prevent="register">
      <h1 class="title">Register For EDU'skool</h1>
      <label id="des" for="fname">First name:</label>
      <input type="text" id="fname" v-model="register_form.fname" /><br />
      <label id="des" for="lname">Last name:</label>
      <input type="text" id="lname" v-model="register_form.lname" /><br />
      <label id="des" for="email">Email:</label>
      <input type="text" id="email" v-model="register_form.email" /><br />
      <label id="des" for="password">Password:</label>
      <input
        type="password"
        id="password"
        v-model="register_form.password"
      /><br />
      <label id="des" for="password-confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password-confirmation"
        v-model="register_form.passwordConfirmation"
      />
      <h1>Choose your role for eduSkool:</h1>
      <input
        type="radio"
        id="teacher"
        name="role"
        value="Teacher"
        v-model="register_form.role"
      />
      <label id="option" for="teacher">Teacher</label><br />
      <input
        type="radio"
        id="student"
        name="role"
        value="P5Student"
        v-model="register_form.role"
      />
      <label id= "option" for="student">Primary 5 Student</label> <br />
       <input
        type="radio"
        id="student"
        name="role"
        value="P6Student"
        v-model="register_form.role"
      />
      <label id= "option" for="student">Primary 6 Student</label> <br />
      <input id="register" type="submit" value="Register" />
    </form>
    <div id="loginBtns">
      <h1>Already have an account?</h1> 
      <input id="register" type="submit" value="Login" onclick="location.href='/login'"/>
      
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Registration",
  components: {
  },

  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () => {
      if (
        register_form.value.password != register_form.value.passwordConfirmation
      ) {
        return alert("Passwords don't match");
      } else if (
        register_form.value.password.length < 6
      ) {
        return alert("Passwords have to be at least 6 characters long")
      } else if (
        register_form.value.role != "P5Student" &&
        register_form.value.role != "P6Student" &&
        register_form.value.role != "Teacher"
      ) {
        return alert("Please choose a role")
      } else if (
        register_form.value.fname == null
      ) {
        return alert("Please enter a name")
      } else if (
        register_form.value.lname == null
      ) {
        return alert("Please enter a name")
      } else if (
        register_form.value.email == null
      ) {
        return alert("Please enter a valid email")
      } else {
        store.dispatch("register", register_form.value);
      }
    };

    return {
      register_form,
      register,
    };
  },
};
</script>

<style scoped>
#fname, #lname, #password-confirmation, #password, #email {
  font-size: 18px;
}
#des {
  font-size: 18
  px;
  margin-right: 30px;
}
h1 {
  font-size: 20px;
}
#logo {
  background-color: #00bcd4;
  width: 100%;
}
#register {
  font-size: 15px;
}
#option {
  font-size: 16px;
  text-align: center;
  margin-left: 20px;
  margin-top: 10px;
}
#register:hover, #option:hover {
  cursor: pointer;
}
#loginBtn {
  font-size: 35px;
}
a {
  margin-right: 130px;
  margin-left: 130px;
  /*   background-color:rgb(217, 224, 224);
  border-radius: 8px; */
  padding: 8px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: black;
  padding-bottom: 2s0px;
}

a:hover {
  color: rgb(101, 181, 235);
}

input {
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  /* box-sizing: border-box; */
  height: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
}

input[type="submit"] {
  /* background-color: rgb(217, 224, 224); */
  border-radius: 8px;
  font-size: 25px;
  height: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

input[type="submit"]:hover {
  background-color: rgb(230, 46, 40);
  border-radius: 8px;
}

input[type="radio"] {
  transform: scale(2);
}

#registration {
  text-align: center;
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(228, 218, 218, 0.9),
      rgba(131, 125, 125, 0.6)
    ),
    url("../assets/teacher2.jpg");
  background-size: cover;
}

label {
  display: inline-block;
  text-align: right;
  width: 150px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
}

</style>