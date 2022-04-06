<template>
<div id="main">
    <div id="ques">
        <h1>Full Question: </h1><br><h3>{{this.question}}</h3>
    </div>
  <form id="forms" @submit.prevent >
    <label for="Question">Choose a Subject</label>
    <select id="sub" name="sub" v-on:change= update()>
    <option value="Chapter">Primary5English</option>
    <option value="saab">Primary5Maths</option>
    <option value="fiat">Primary5Science</option>
    <option value="audi">Primary6English</option>
    <option value="saab">Primary6Maths </option>
    <option value="fiat">Primary6Science</option>
    </select> <br> <br>
    <label for="Question">Choose a Chapter</label>
    <select id="chap" name="chap" v-on:change= update()>
    <option value="Chapter">Chap1</option>
    <option value="Chapter">Chap2</option>
    <option value="Chapter">Chap3</option>
    <option value="Chapter">Chap4</option>
    <option value="Chapter">Chap5</option>
    </select> <br> <br>
    <select v-on:change= select() required id="select">
        <option>Choose the Question to delete </option>
    </select>
<br><br>
<button v-on:click = count(this.subject);submit()> Delete</button>
  </form>
</div>
</template>

<script>

import firebaseApp from '../firebase.js'
import { getFirestore, updateDoc,} from "firebase/firestore";
import {collection, deleteDoc,getDoc,getDocs, doc} from "firebase/firestore";
const db = getFirestore(firebaseApp)

export default {
    name: "AddQues",
    data(){
        return{
            numOptions:0,
            subject:"",
            chapter:"",
            question:"",
            Options:[],
            correct:-1,
            hint:"Sorry the teacher didn't provide a hint!",
            ids:[],
            toDel:"",


        }
    },
    methods :{
        update(){
            this.question=""
            var e = document.getElementById("sub");
            var text=e.options[e.selectedIndex].text;
            this.subject = text
             var f = document.getElementById("chap");
            var val=f.options[f.selectedIndex].text;
            this.chapter = val
            const myNode = document.getElementById("select");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
            this.next()

        },
        next(){

            let Questions = []
            this.ids = []
            getDocs(collection(db,"Questions",String(this.subject),String(this.chapter))).then(querySnapshot =>{
                querySnapshot.forEach((doc)=>{
                    let s=doc.data()
                    this.ids.push(doc.id)
                    Questions.push(s.question)
                })
            }).then(()=>{
                console.log("done")
                console.log(this.ids)
                this.temp(Questions)
            })

        },
        temp(Questions){
            var select= document.getElementById("select")
                var placeholder = "Choose the Question to delete";
                var ell = document.createElement("option");
                ell.textContent= placeholder
                ell.value = placeholder
                select.appendChild(ell)
                
                for(var i=0; i<Questions.length; i++){
                var opt = Questions[i];
                var el = document.createElement("option");
                el.textContent= opt
                el.value = opt
                select.appendChild(el)
            }

        },
            select(){
       
            var x = document.getElementById("select").selectedIndex;
            var y = document.getElementById("select").options;
            console.log(y[x].text)
            this.question  = y[x].text
            var ref = y[x].index -1
            console.log(ref)
            console.log(this.ids[ref])
            this.toDel = this.ids[ref]

            




            },
            submit(){
            alert("You are going to delete the selected question, this action cannot be undone")
            var x = document.getElementById("select").selectedIndex;
            var y = document.getElementById("select").options;
            console.log(y[x].text)
            this.question  = y[x].text
            var ref = y[x].index -1
            console.log(ref)
            console.log(this.ids[ref])
            this.toDel = this.ids[ref]
            console.log(this.question)
            console.log(this.subject)
            console.log(this.chapter)
            console.log(this.ids[ref])
            deleteDoc(doc(db,"Questions", String(this.subject), String(this.chapter),String(this.ids[ref]))).then(console.log("deleted"))
            this.update()
            },
             count(chap){
                getDoc(doc(db,"Questions","index")).then((doc)=>{
                    let s = doc.data()
                    let val =  s[String(chap)] -1
                    this.change(chap,val)
                    console.log(chap)
                    console.log(val)
                })

             },
             change(chap, val){
                 updateDoc(doc(db,"Questions","index"),{
                     chap : val
                 }).then(()=>{
                     console.log("Score Added")
                 })
             }
                

    // }).then(() =>{
    //         updateDoc(doc(db,"Questions","index"),{
    //                 chap: 1
                
    //             })
    //     console.log("updated")
    // })
                

    //         }
    },
    mounted(){
        this.update()
    }

}

</script>

<style scoped>
button:hover {
    background-color: #fb8332;
}
button {
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
#forms {
    margin-top: 20px;
    margin-left: 300px;
}
label {
    font-weight:bold;
}
option {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
#main {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
form{
    max-width: 70%;
}

#ques{
    border: 1px black solid;
    margin-left: 320px;
    width: 70%;
}

select {
    text-align: center;
    padding: 2px 0px 2px 0px;
    margin: 0px 0px 0px 20px;
    width: 200px;
}
select option{
    width:120px;
    overflow:hidden;
}

</style>