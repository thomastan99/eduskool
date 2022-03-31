<template>
    <div id="main">
        <div id="header"><h1>Announcements</h1></div>
        <button id="create" @click="isOpen=!isOpen">Create a new announcement</button>
        <transition name="fade" appear>
            <div id="modal-overlay" v-if="isOpen" @click="isOpen=!isOpen"></div>
        </transition>
        <transition name="slide" appear>
            <div id="modal" v-if="isOpen">
                <h1>New Announcement</h1>
                <form id="newAnnouncement">
                    <label for="subject">Subject: </label>
                    <input type="text" id="subject" required="" placeholder="Enter Subject"> <br><br>
                    <label for="announcement">Announcement: </label>
                    <textarea id="announcement" required="" placeholder="Enter Announcement Details"></textarea> <br><br>
                    </form>
                <button id="save" v-on:click="savetofs()">Save</button>
                <button id="close" @click="isOpen=!isOpen">Close</button>
            </div>
        </transition>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    data: () => {
        return {
            isOpen: false
        }
    },

    methods: {
        async savetofs(){
            var subject = document.getElementById("subject").value
            var announcement = document.getElementById("announcement").value
            alert("Creating new announcement: " + subject)
            try{
                var date = new Date()
                const docRef = await setDoc(doc(db, "Announcements", date.toISOString()),{
                    Subject: subject, DateID: date.toISOString(), DateString: date.toDateString(), Announcement: announcement
                })
                console.log(docRef)
                document.getElementById("newAnnouncement").reset()
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
    margin-top: 60px;
    margin-left: 280px;
    display: inline-block;
}

#header {
    float: left;
}

h3 {
    color: #00bcd4;
}

#create {
    float: left;
    margin-left: 350px;
    margin-top: 30px;
    background-color: #00bcd4;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 0.1s;
    font-size: 18px;
}

#close, #save {
    background-color: #00bcd4;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 0.1s;
}

#save {
    margin-right: 10px;
}

#create:hover, #close:hover, #save:hover {
    background-color: #6cc1cc;
}

.date {
    color: #6cc1cc;
}

#modal-overlay {
    position: absolute;
    top: -90px;
    left: -350px;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.3);
    height: 735px;
    width: 1300px;
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
    max-width: 400px;
    background-color: #fff;
    border-radius: 16px;
    padding: 25px;
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
}

label {
    text-align: center;
}

input, textarea {
    width: 250px;
    border: 1px solid black;
}

#announcement {
    height: 200px;
    resize: none;
    vertical-align: middle;
}
</style>