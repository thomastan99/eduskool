<template>
    <div id="main">
        <div id="header"><h1>Home</h1></div>
        <div id="content">
            <table id="tab">
                <tr>
                    <th>Class</th>
                    <th>No. of Students</th>
                    <th>Time Slot</th>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import firebaseApp from "../firebase.js"
import { getFirestore, getDoc, doc } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const db = getFirestore(firebaseApp)

export default {
    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user
                display(user)
            }
        })

        async function display(user) {
            let z = await getDoc(doc(db, "Teachers", user.email))
            let classeslist = z.data().Classes

            for(let i = 0; i < classeslist.length; i++) {
                let currclass = classeslist[i]

                let x = await getDoc(doc(db, "Classes", currclass))
                let studentcount = x.data().students.length
                let time = x.data().Timing

                let table = document.getElementById("tab")
                let row = table.insertRow(-1)
                let cell0 = row.insertCell(0)
                let cell1 = row.insertCell(1)
                let cell2 = row.insertCell(2)
                cell0.innerHTML = "<a href='/teacherscs' style='color:#00bcd4'>" + currclass + "</a>"
                cell1.innerHTML = studentcount
                cell2.innerHTML = time
            }
        }
    }
}
</script>

<style scoped>
#main {
    margin-top: 50px;
    margin-left: 250px;
    display: inline-block;
}

#header {
    margin-bottom: 20px;
}

h1 {
    font-size: 40px;
}

a {
    color: #00bcd4;
}

#content {
}
</style>

<style>
a:visited, a:link, a:active {
    text-decoration: none;
}

table, tr {
    font-size: 18px;
    font-weight: bold;
}

tr {
    height: 100px;
}

table {
    width: 800px;
    overflow-x: scroll;
}

table, th, td {
    border-bottom: 1px solid black;
    border-collapse: collapse;
}
</style>