<template>
    <div id="main">
        <div id="header"><h1>Home</h1></div>
        <div id="content">
            <table id="tab">
                <tr>
                    <th>Class</th>
                    <th>No. of Students</th>
                    <th>Timetable</th>
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
            let c = z.data().Classes
            let classeslist = Object.keys(c)
            for(let i = 0; i < classeslist.length; i++) {
                let currclass = classeslist[i]
                let currlist
                let time
                if (currclass == "Math5A") {
                    currlist = c.Math5A.Students
                    time = c.Math5A.Timing
                } else if (currclass == "Science5A") {
                    currlist = c.Science5A.Students
                    time = c.Science5A.Timing
                } else {
                    currlist = c.Science6B.Students
                    time = c.Science6B.Timing
                }

                let table = document.getElementById("tab")
                let row = table.insertRow(-1)
                let cell0 = row.insertCell(0)
                let cell1 = row.insertCell(1)
                let cell2 = row.insertCell(2)
                cell0.innerHTML = "<a href='/teacherscs' style='color:#00bcd4'>" + currclass + "</a>"
                cell1.innerHTML = currlist.length
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
    float: left;
    margin-bottom: 20px;
}

h1 {
    font-size: 40px;
}

a {
    color: #00bcd4;
}

#content {
    margin-top: 110px;
}
</style>

<style>
a:visited, a:link, a:active {
    text-decoration: none;
}

th, tr {
    font-size: 18px;
    font-weight: bold;
}

tr {
    height: 100px;
}

table {
    width: 800px;
}

table, th, td {
    border-bottom: 1px solid black;
    border-collapse: collapse;
}
</style>