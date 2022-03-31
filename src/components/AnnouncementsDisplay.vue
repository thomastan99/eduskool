<template>
    <div id="content">
    </div>
</template>

<script>
import firebaseApp from "../firebase.js"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const db = getFirestore(firebaseApp)

export default {
    mounted() {
        async function display() {
            let z = await getDocs(collection(db, "Announcements"))
            

            z.forEach((docs)=> {
                let d = docs.data()
                var subject = d.Subject
                var date = d.DateString
                var announcement = d.Announcement

                document.getElementById("content").innerHTML = "<article style='background-color:#ececec; border-radius:5px; padding:5px; padding-left:20px; margin-bottom:20px'>\
                <h3 style='color:#00bcd4'>" + String(subject) + "</h3><h4 style='color:#6cc1cc'>" + String(date) + "</h4><h4>" + String(announcement) + "<h4></article>" + document.getElementById("content").innerHTML
            })
        }
        display()
    }
}
</script>


<style scoped>
#content {
    display: inline-block;
    float: left;
    width: 900px;
    margin-top: 20px;
    margin-left: 336px;
    text-align: left;
}
</style>