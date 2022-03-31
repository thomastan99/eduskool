<template>
  <BlueBanner />
  <div id="editProfile">
    <form
      id="editProfileForm"
      class="editProfile"
      @submit.prevent="editProfile"
    >
      <h1 class="title">Edit Profile</h1>
      <label for="fname">First name:</label>
      <input type="text" id="fname" v-model="editProfile_form.fname" /><br />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" v-model="editProfile_form.lname" /><br />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        v-model="editProfile_form.password"
      /><br />
      <label for="password-confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password-confirmation"
        v-model="editProfile_form.passwordConfirmation"
      />
      <br />
      <!-- <p>Upload a Profile Picture:</p>
      <br /> -->
      <!-- <input type="file" id="profilepic" @change="onFileChange" /> -->
      <br />
      <input type="submit" value="Edit" />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useStore } from "vuex";
import BlueBanner from "../components/BlueBanner.vue";

export default {
  name: "EditProfile",

  components: {
    BlueBanner,
  },

  data() {
    return {
      user: false,
    };
  },

  mounted() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },

  // methods: {
  //   onFileChange(e) {
  //     var files = e.target.files || e.dataTransfer.files;
  //     if (!files.length) return;
  //     this.file = files[0];
  //     this.createImage(files[0]);
  //   },
  //   createImage(file) {
  //     // var image = new Image();
  //     var reader = new FileReader();
  //     var vm = this;

  //     reader.onload = (e) => {
  //       vm.image = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //     console.log(file.name);
  //   },
  //   // removeImage: function (e) {
  //   //   this.image = "";
  //   // },
  // },

  setup() {
    const editProfile_form = ref({});
    const store = useStore();

    const editProfile = () => {
      // console.log(editProfile_form);
      if (
        editProfile_form.value.password !=
        editProfile_form.value.passwordConfirmation
      ) {
        return alert("Passwords don't match");
      } else if (editProfile_form.value.password.length == 0) {
        return alert("Password cannot be empty");
      } else if (editProfile_form.value.password.length < 6) {
        return alert("Passwords have to be at least 6 characters long");
      } else if (editProfile_form.value.fname == null) {
        return alert("Please enter a name");
      } else if (editProfile_form.value.lname == null) {
        return alert("Please enter a name");
      } else {
        store.dispatch("editProfile", editProfile_form.value);
        // console.log("test");
      }
    };

    return {
      editProfile_form,
      editProfile,
    };
  },
};
</script>

<style scoped>
#loginBtn {
  font-size: 40px;
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

h1 {
  font-size: 40px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

input {
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  /* box-sizing: border-box; */
  height: auto;
  font-size: 25px;
}

input[type="submit"] {
  /* background-color: rgb(217, 224, 224); */
  border-radius: 8px;
  font-size: 30px;
  height: 40px;
}

input[type="submit"]:hover {
  background-color: rgb(230, 46, 40);
  border-radius: 8px;
}

label {
  display: inline-block;
  text-align: right;
  width: 150px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 30px;
  padding-right: 5px;
}

p {
  font-weight: bold;
  font-size: 30px;
  display: inline-block;
  text-align: left;
  color: black;
  margin-right: 135px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>