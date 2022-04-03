<template>
    <div id="main">
        <div class="container">
            <div class="header"><h1>Math5A</h1></div>
            <div class="content">
                <table id="Math5A">
                    <tr>
                        <th>Student Name</th>
                        <th>Score</th>
                        <th>Achievements</th>
                    </tr>
                </table>
            </div>
        </div><br>
        <div class="container">
            <div class="header"><h1>Science5A</h1></div>
            <div class="content" style="left:-200px">
                <table id="Science5A">
                    <tr>
                        <th>Student Name</th>
                        <th>Score</th>
                        <th>Achievements</th>
                    </tr>
                </table>
            </div>
        </div><br>
        <div class="container">
            <div class="header"><h1>Science6B</h1></div>
            <div class="content" style="left:-200px">
                <table id="Science6B">
                    <tr>
                        <th>Student Name</th>
                        <th>Score</th>
                        <th>Achievements</th>
                    </tr>
                </table>
            </div>
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
                let nestedlist = []
                if (currclass == "Math5A") {
                    currlist = c.Math5A.Students
                } else if (currclass == "Science5A") {
                    currlist = c.Science5A.Students
                } else {
                    currlist = c.Science6B.Students
                }

                for (let j = 0; j < currlist.length; j++) {
                    let x = await getDoc(doc(db, "Students2", currlist[j]))
                    let d = x.data()
                    let totalscore
                    if (currclass == "Math5A") {
                        totalscore = d.scores.math.chap1 + d.scores.math.chap2 + d.scores.math.chap3
                    } else {
                        totalscore = d.scores.sci.chap1 + d.scores.sci.chap2 + d.scores.sci.chap3
                    }

                    let studenttotalscore = [d.name, totalscore]
                    nestedlist.push(studenttotalscore)
                }

                nestedlist.sort((function(index){
                    return function(a,b) {
                        return (a[index] === b[index] ? 0 : (a[index] > b[index] ? -1 : 1));
                    };
                })(1))

                for (let j = 0; j < nestedlist.length; j++) {
                    let table = document.getElementById(currclass)
                    let row = table.insertRow(-1)
                    let cell0 = row.insertCell(0)
                    let cell1 = row.insertCell(1)
                    let cell2 = row.insertCell(2)
                    cell0.innerHTML = nestedlist[j][0]
                    cell1.innerHTML = nestedlist[j][1]
                    cell2.innerHTML = "<p>temp</p>"
                }
                
            }
        }
    }
}
</script>

<style scoped>
#main {
    margin-top: 50px;
    margin-left: 300px;
    display: inline-block;
}

.header {
    float: left;
    margin-bottom: 20px;
}

h1 {
    font-size: 40px;
}

th, tr {
    font-size: 20px;
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

a {
    color: #00bcd4;
}

a:visited, a:link, a:active {
    text-decoration: none;
}

.content {
    max-width: 800px;
    overflow-x: scroll;
    position: relative;
    top: 80px;
    left: -150px;
}
.container {
    margin-bottom: 80px;
}
</style>