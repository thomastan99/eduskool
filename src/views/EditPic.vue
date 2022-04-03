<template>
  <BlueBanner />
  <div id="editPic">
    <img id="profilePic" alt="No picture yet" />
    <form id="editPicForm" class="editPic" @submit.prevent="update">
      <h1 class="title">Upload a new Profile Picture</h1>
      <!-- <br />
      <input type="file" id="profilepic" @change="onFileChange" />
      <br /> -->
      <!-- <input type="submit" value="Update" /> -->

      <label for="url">Please enter a valid URL:</label>
      <input type="text" id="url" v-model="url" /> <br />
      <button id="updateBtn" @click.prevent="update">Update</button>
      <!-- <p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" /> -->
    </form>
    <br />
    <br />
    <a href="/profile" id = "cancelBtn"> Back to Profile </a>
  </div>
</template>

<script>
// import { ref } from "vue";
import { getAuth, onAuthStateChanged, updateProfile } from "@firebase/auth"; //
// import { useStore } from "vuex";
import BlueBanner from "../components/BlueBanner.vue";
// import { getDownloadURL } from "firebase/storage"

export default {
  name: "EditPic",

  components: {
    BlueBanner,
  },

  data() {
    return {
      user: false,
      image: null,
      //   message: "",
      url: "",
    };
  },

  mounted() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        console.log(user);
        document.getElementById("profilePic").src = user.photoURL;
      }
    });
  },

  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file = files[0];
      this.createImage(files[0]);
    },
    createImage(file) {
      // var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log(file.name);
      console.log(this.file);
    },
    // removeImage: function (e) {
    //   this.image = "";
    // },
    async update() {
      // console.log(this.user.displayName);
      // console.log(this.url);
      await updateProfile(this.user, {
        photoURL: this.url,
      });
      document.getElementById("profilePic").src = this.url;
    },
  },
};
</script>

<style scoped>
#cancelBtn {
  font-size: 35px;
}

#updateBtn {
  border-radius: 8px;
  font-size: 30px;
  height: 40px;
}

#updateBtn:hover {
  background-color: rgb(230, 46, 40);
  border-radius: 8px;
}

#profilePic {
  width: 400px;
  height: auto;
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
  width: auto;
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