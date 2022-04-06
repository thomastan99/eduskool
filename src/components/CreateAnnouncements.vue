<template>
    <div id="main">
        <div id="header"><h1>Announcements</h1></div>
        <button id="create" @click="isOpen=!isOpen">Create a new announcement</button>
        <transition name="fade" appear>
            <div id="modal-overlay" v-if="isOpen" @click="isOpen=!isOpen"></div>
        </transition>
        <transition name="slide" appear>
            <div id="modal" v-if="isOpen">
                <h1 id="title">New Announcement</h1>
                <form id="newAnnouncement">
                    <label for="subject">Subject: </label>
                    <input type="text" id="subject" required="" placeholder="Enter Subject"> <br><br>
                    <label for="announcement">Announcement: </label>
                    <textarea id="announcement" required="" placeholder="Enter Announcement Details"></textarea> <br><br>
                    </form><br><br>
                <button id="save" v-on:click="savetofs(user)">Save</button>
                <button id="close" @click="isOpen=!isOpen">Close</button>
            </div>
        </transition>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
const db = getFirestore(firebaseApp);

export default {
    data: () => {
        return {
            isOpen: false
        }
    },
    mounted() {
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
          this.user = user;
      }
    });
    },
    methods: {
        async savetofs(user){
            var subject = document.getElementById("subject").value
            var announcement = document.getElementById("announcement").value
            alert("Creating new announcement: " + subject)
            try{
                var date = new Date()
                const docRef = await setDoc(doc(db, "Announcements", date.toISOString()),{
                    Subject: subject, DateID: date.toISOString(), DateString: date.toDateString(), Announcement: announcement,
                    User: user.displayName
                })
                console.log(docRef)
                document.getElementById("newAnnouncement").reset()
                location.reload()
                this.$emit("created")
            }
            catch(error){
                console.error("Error adding document: ", error)
            }
        }
    }
}
</script>


<style scoped>
#main {
    margin-top: 100px;
    margin-left: 200px;
}

#header {
}

h3 {
    color: #00bcd4;
}

#create {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: #00bcd4;
    color: white;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 0.1s;
    font-size: 18px;
}

#close, #save {
    background-color: #00bcd4;
    color: white;
    border: none;
    margin: 0px 10px 0px 50px;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 0.1s;
    display: inline-block;
}

#save {
    margin-right: 10px;
}

#create:hover, #close:hover, #save:hover {
    background-color: #fb8332;
}

.date {
    color: #6cc1cc;
}

#modal-overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 16px;
    padding: 40px;
}
#title {
    padding: 0px 0px 20px 0px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

#newAnnouncement {
    display: inline-block;
    text-align: right;
}

form {
    text-align: center;
    align-items: center;
    margin: auto;
    font-size: 15px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}

label {
    text-align: center;
    
}

input, textarea {
    width: 250px;
    border: 1px solid black;
    font-size: 15px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}

#announcement {
    height: 200px;
    resize: none;
    vertical-align: middle;
}
</style>