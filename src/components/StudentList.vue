<template>
    <div id="main">
        <div class="container">
            <div class="header"><h1>Math5A</h1></div>
            <div class="content">
                <table id="Maths5A">
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
            let classeslist = z.data().Classes
            for(let i = 0; i < classeslist.length; i++) {
                let currclass = classeslist[i]
                let nestedlist = []
                let y = await getDoc(doc(db, "Classes", currclass))
                let studentlist = y.data().students

                for (let j = 0; j < studentlist.length; j++) {
                    let currstudent = studentlist[j]
                    let x = await getDoc(doc(db, "Students", currstudent))
                    let d = x.data()
                    let name = d.Name
                    let totalscore
                    

                    if (currclass == "Maths5A") {
                        totalscore = d.scores.math.Chap1 + d.scores.math.Chap2 + d.scores.math.Chap3 + d.scores.math.Chap4 + d.scores.math.Chap5 + d.scores.math.Chap6 + d.scores.math.Chap7
                    } else {
                        totalscore = d.scores.sci.Chap1 + d.scores.sci.Chap2 + d.scores.sci.Chap3 + d.scores.sci.Chap4 + d.scores.sci.Chap5 + d.scores.sci.Chap6 + d.scores.sci.Chap7
                    }

                    let studenttotalscore = [name, totalscore]
                    nestedlist.push(studenttotalscore)
                }

                nestedlist.sort((function(index){
                    return function(a,b) {
                        return (a[index] === b[index] ? 0 : (a[index] > b[index] ? -1 : 1));
                    };
                })(1))

                for (let k = 0; k < nestedlist.length; k++) {
                    let table = document.getElementById(currclass)
                    let row = table.insertRow(-1)
                    let cell0 = row.insertCell(0)
                    let cell1 = row.insertCell(1)
                    let cell2 = row.insertCell(2)
                    cell0.innerHTML = nestedlist[k][0]
                    cell1.innerHTML = nestedlist[k][1]
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

th {
    color: #00bcd4;
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