<template>
    <div id="content">
    </div>
    <Footer/>
</template>

<script>
import firebaseApp from "../firebase.js"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import Footer from "@/components/Footer.vue"
const db = getFirestore(firebaseApp)

export default {
    name: 'Achievements',
    components: {
        Footer,
    },
    mounted() {
        async function display() {
            let z = await getDocs(collection(db, "Announcements"))
            
            z.forEach((docs)=> {
                let d = docs.data()
                var subject = d.Subject
                var date = d.DateString
                var announcement = d.Announcement
                var user = d.User
                document.getElementById("content").innerHTML = "<article style='background-color:#ececec; border-radius:5px; padding:5px; padding-left:20px; margin-bottom:20px'>\
                <h3 style='color:#00bcd4'>" + String(subject) + "</h3><h4 style='color:#6cc1cc'>" + String(date) + "</h4><h4>" + String(announcement) + "<h4><h3 style='color:#00bcd4'>" + String(user) + "</h3></article>"
                + document.getElementById("content").innerHTML
            })
        }
        display()
    }
}
</script>


<style scoped>
#content {
    margin-top: 50px;
    margin-left: 220px;
    text-align: left;
    display: inline-block;
    width: 900px;
}
</style>