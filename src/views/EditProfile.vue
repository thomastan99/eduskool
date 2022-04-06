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
      <input type="text" id="fname" v-model="editProfile_form.fname" required /><br />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" v-model="editProfile_form.lname" required /><br />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        v-model="editProfile_form.password"
        required
      /><br />
      <label for="password-confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password-confirmation"
        v-model="editProfile_form.passwordConfirmation"
        required
      />
      <br />
      <!-- <p>Upload a Profile Picture:</p>
      <br /> -->
      <!-- <input type="file" id="profilepic" @change="onFileChange" /> -->
      <br />
      <input id="edit" type="submit" value="Edit" />
    </form>
  </div>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue"
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useStore } from "vuex";
import BlueBanner from "../components/BlueBanner.vue";
export default {
  name: "EditProfile",

  components: {
    BlueBanner,
    Footer,
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
#editProfile {
  margin-top: 100px;
  margin-left: 200px;
}

a {
  margin-right: 130px;
  margin-left: 130px;
  /*   background-color:rgb(217, 224, 224);
  border-radius: 8px; */
  padding: 8px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
  padding-bottom: 2s0px;
}

a:hover {
  color: rgb(101, 181, 235);
}

h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 40px;
}

#edit {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: #00bcd4;
    color: white;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
}
#edit:hover {
  background-color: #fb8332;
}
input {
  margin-right: 5px;
  margin-left: 10px;
  margin-bottom: 20px;
  /* box-sizing: border-box; */
  height: auto;
  font-size: 18px;
}

input[type="submit"] {
  /* background-color: rgb(217, 224, 224); */
  border-radius: 8px;
  font-size: 18px;
  height: 40px;
}

input[type="submit"]:hover {
  background-color: rgb(230, 46, 40);
  border-radius: 8px;
}

label {
  display: inline-block;
  text-align: left;
  width: 200px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
}

p {
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
  text-align: left;
  color: black;
  margin-right: 135px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>