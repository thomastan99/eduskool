<template>
    <div id="main">
        <div id="pageTitle">
            <h1> {{title}} </h1>
        </div>
        <table id = "topicstable"> 
            <tr>
                <th> Syllabus </th>
                <th> Learning Videos </th>
                <th> Quiz Score </th>
                <th> Last Attempted Score </th>
            </tr>
        </table><br><br>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    data: () => {
        return {
            title: getDocs(collection(db, ))
        }
    },
    mounted() {
        async function display() {
            let z = await getDocs(collection(db, "Primary5"))
            let index = 1

            z.forEach((docs) => {
                let data = docs.data();
                var table = document.getElementById("topicstable")
                var row = table.insertRow(index)

                var syllabus = (data.Syllabus)
                var url = (data.URL)

                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);

                cell1.innerHTML = syllabus;
                cell2.innerHTML = url;

                index+=1;
            })
        }
        display()
    }

}
</script>

<style scoped>
#modal {
    background-color:white;
    position: fixed;
    bottom:6%;
    right:6%;
    max-width: 1000px;
}

#button {
    cursor:pointer;
    transition-duration: 0.1s;
    text-align:center;
    font-size:15px;
    padding: 10px 20px 10px 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}
#button:hover, #close:hover, #attempt:hover {
    background-color: #6cc1cc;
}
#modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
}

#main{
    margin-top: 3%;
    margin-left:400px;
}
#pageTitle {
    display:inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size:23px;
    margin-right:180px;
}
#topicstable {
    text-align:left;
    color: #6cc1cc;
    font-size: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    float: left;
}
.marks {
    text-align:center;
    color: #6cc1cc;
    font-size: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}
th{
    text-align: center;
    font-size: 20px;
    color:grey;
    padding: 10px 25px 5px 25px;
    border-bottom: 1px solid black;
}
td {
    font-size: 15px;
    border-bottom: 1px solid;
    padding: 10px 20px 20px 10px;
    text-align:center;
}
#watch {
    text-align:center;
    font-size:15px;
    padding: 10px 20px 10px 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}
#attempt {
    text-align:center;
    font-size:15px;
    padding: 10px 20px 10px 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}
.syllabus{
    text-align:left;
    color: #6cc1cc;
    font-size: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    float: left;
}

</style>