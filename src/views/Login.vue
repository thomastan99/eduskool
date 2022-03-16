<template>
  <div style = "text-align:center;">
      <h1 id = "mainHead"> eduSKOOL </h1>
      <div id = "firebaseui-auth-container"></div>
      <div id = "pagecontent">
          EduSkool is the leading web application in helping secondary school students catch up or overtake their peers with questions
          up to date with the latest syllabus
      </div>
      <h5>coopyright@cpp-2022</h5>
  </div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
    name: "Login",

    mounted() {
        // To call ui instance
        var ui = firebaseui.auth.AuthUI.getInstance();

        if (!ui) {
            // need to create instance only once
            // initialize the firebaseUI widget using firebase
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }

        var uiConfig = {
            signInSuccessUrl: '/home',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
        };

        ui.start("#firebaseui-auth-container", uiConfig)
    }
}
</script>

<style scoped>

#firebaseui-auth-container {
    margin-top: 50px;
    margin-bottom: 50px;
}

#pagecontent {
    height: 100px;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
}

#mainHead {
    text-align: center;
    text-shadow: 2px 2px grey;
}

#bg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}

h5 {
    text-align: center;
    background-color: rgba(12, 170, 136, 0.61)
}
</style>