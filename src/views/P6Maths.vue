<template>
  <BlueBanner/>
  <LeftPanel/>
  <br>
     <div id="main">
        <div id="pageTitle"><h1> P6 Maths </h1></div>
        <table id = "topicstable"> 
            <th> Syllabus </th>
            <th> Learning Videos </th>
            <th> Quiz Score </th>
            <th> Last Attempted Score </th>
            <tr>
                <td> 
                    <h3 class="syllabus"> Chapter 1: Number & Algebra </h3>
                </td>
                <td> 
                    <button id="button" @click="wholeNumbers=!wholeNumbers">Watch</button>
                        <transition name="fade" appear>
                            <div id="modal-overlay" v-if="wholeNumbers" @click="wholeNumbers=!wholeNumbers"></div>
                        </transition>
                        <transition name="slide" appear>
                            <div id="modal" v-if="wholeNumbers">
                                <h1> Chapter 1: Number & Algebra </h1>
                                 <iframe width="950" height="500"
                                    src="https://www.youtube.com/embed/HAhg0uXn9GA?autoplay=1">
                                </iframe>
                            </div>
                        </transition>
                </td>
                <td> 
                    <!-- <button id="attempt">Attempt</button> -->
                    <router-link class="router-link" to="/ready" tag="button" v-on:click="update('Chap1','Primary6Maths')" >Attempt </router-link>
                    <!-- <a id="homeworkText" href="/quiz"> </a> -->
                </td>
                <td> 
                    <h3 class="marks"> {{getChap1Score()}}/5 </h3>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class="syllabus"> Chapter 2: Statistics </h2>
                </td>
                <td> 
                     <button id="button" @click="fractions=!fractions">Watch</button>
                        <transition name="fade" appear>
                            <div id="modal-overlay" v-if="fractions" @click="fractions=!fractions"></div>
                        </transition>
                        <transition name="slide" appear>
                            <div id="modal" v-if="fractions">
                                <h1> Chapter 2: Statistics </h1>
                                 <iframe width="950" height="500"
                                    src="https://www.youtube.com/embed/rl7e0djo9Go">
                                </iframe>
                            </div>
                        </transition>
                </td>
                <td> 
                    <router-link class="router-link" to="/ready" tag="button" v-on:click="update('Chap2','Primary6Maths')">Attempt </router-link>
                </td>

                <td> 
                    <h3 class="marks"> {{getChap2Score()}}/5 </h3>
                </td>
            </tr>
            <tr>
                <td>
                    <h3 class="syllabus"> Chapter 3: Fractions </h3>
                </td>
                <td> 
                    <button id="button" @click="decimals=!decimals">Watch</button>
                            <transition name="fade" appear>
                                <div id="modal-overlay" v-if="decimals" @click="decimals=!decimals"></div>
                            </transition>
                            <transition name="slide" appear>
                                <div id="modal" v-if="decimals">
                                    <h1> Chapter 3: Fractions </h1>
                                    <iframe width="950" height="500"
                                        src="https://www.youtube.com/embed/rl7e0djo9Go">
                                        <!-- src="https://www.youtube.com/embed/UCBXoLb2ItI"> -->
                                        <!-- decimals -->
                                    </iframe>
                                </div>
                            </transition>
                </td>
                <td> 
                    <router-link class="router-link" to="/ready" tag="button" v-on:click="update('Chap3','Primary6Maths')">Attempt </router-link>
                </td>
                <td> 
                    <h3 class="marks"> {{getChap3Score()}}/5 </h3>
                </td>
            </tr>
             <tr>
                <td>
                    <h3 class="syllabus"> Chapter 4: Geometry </h3>
                </td>
                <td> 
                    <button id="button" @click="percent=!percent">Watch</button>
                            <transition name="fade" appear>
                                <div id="modal-overlay" v-if="percent" @click="percent=!percent"></div>
                            </transition>
                            <transition name="slide" appear>
                                <div id="modal" v-if="percent">
                                    <h1> Chapter 4: Percentage </h1>
                                    <iframe width="950" height="500"
                                        src="https://www.youtube.com/embed/AL0-0f9azNo">
                                    </iframe>
                                </div>
                            </transition>
                </td>
                <td> 
                    <router-link class="router-link" to="/ready" tag="button" v-on:click="update('Chap4','Primary6Maths')">Attempt </router-link>
                </td>
                <td> 
                    <h3 class="marks"> {{getChap4Score()}}/5 </h3>
                </td>

            </tr>
            <tr>
                <td>
                    <h3 class="syllabus"> Chapter 5: Ratio </h3>
                </td>
                <td> 
                    <button id="button" @click="ratio=!ratio">Watch</button>
                            <transition name="fade" appear>
                                <div id="modal-overlay" v-if="ratio" @click="ratio=!ratio"></div>
                            </transition>
                            <transition name="slide" appear>
                                <div id="modal" v-if="ratio">
                                    <h1> Chapter 5: Ratio </h1>
                                    <iframe width="950" height="500"
                                        src="https://www.youtube.com/embed/xA435umOQuw">
                                    </iframe>
                                </div>
                            </transition>
                </td>
                <td> 
                    <router-link class="router-link" to="/ready" tag="button" v-on:click="update('Chap5','Primary6Maths')">Attempt </router-link>
                </td>
                <td> 
                    <h3 class="marks"> {{getChap5Score()}}/5 </h3>
                </td>
            </tr>
             <tr>
                <td>
                    <h3 class="syllabus"> Chapter 6: Decimals </h3>
                </td>
                <td> 
                    <button id="button" @click="measure=!measure">Watch</button>
                    <transition name="fade" appear>
                        <div id="modal-overlay" v-if="measure" @click="measure=!measure"></div>
                    </transition>
                    <transition name="slide" appear>
                        <div id="modal" v-if="measure">
                            <h1> Chapter 6: Decimals </h1>
                            <iframe width="950" height="500"
                                src="https://www.youtube.com/embed/kOJFSH_Bn9U">
                            </iframe>
                        </div>
                    </transition>
                </td>
                
                <td> 
                    <router-link class="router-link" to="/ready" tag="button" v-on:click="update('Chap6','Primary6Maths')">Attempt </router-link>
                </td>
                <td> 
                    <h3 class="marks"> {{getChap6Score()}}/5 </h3>
                </td>
            </tr>
             <tr>
                <td>
                    <h3 class="syllabus"> Chapter 7: Speed </h3>
                </td>
                <td> 
                    <button id="button" @click="geo=!geo">Watch</button>
                    <transition name="fade" appear>
                        <div id="modal-overlay" v-if="geo" @click="geo=!geo"></div>
                    </transition>
                    <transition name="slide" appear>
                        <div id="modal" v-if="geo">
                            <h1> Chapter 7: Speed </h1>
                            <iframe width="950" height="500"
                                src="https://www.youtube.com/embed/AuJQZ8Pusdg">
                            </iframe>
                        </div>
                    </transition>        
                </td>
                <td> 
                    <router-link class="router-link" to="/ready" tag="button" v-on:click="update('Chap7','Primary6Maths')">Attempt </router-link>
                </td>
                <td> 
                    <h3 class="marks"> {{getChap7Score()}}/5 </h3>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import BlueBanner from "@/components/BlueBanner.vue"
import LeftPanel from "@/components/LeftPanel.vue"

const db = getFirestore(firebaseApp)
const auth = getAuth();


export default {
    name: 'P5Maths',
    components: {
    LeftPanel,
    BlueBanner,
  },

  data(){
        return{
            chap1score: 0,
            chap2score: 0,
            chap3score: 0,
            chap4score: 0,
            chap5score: 0,
            chap6score: 0,
            chap7score: 0,
            currQuizChapter :"1",
            curQuizSubject :"Primary6Maths",
            wholeNumbers: false,
            fractions: false,
            decimals: false,
            percent: false,
            ratio: false,
            measure: false,
            geo: false,
        }
    },
    methods : {
        // update(chapter,subject){
        //     updateDoc(doc(db,"Questions","index"),{
        //         chapter: chapter,
        //         subject: subject
        //     }).then(() =>{
        //         console.log("updated")
        //     })

        // }
        update(chapter,subject){
            this.fbuser = auth.currentUser.email
            console.log(this.fbuser)
            updateDoc(doc(db,"Students",String(this.fbuser)),{
                currQuizChapter: chapter,
                currQuizSubject: subject
            }).then(() =>{
                console.log("updated")
            })

        },

        getChap1Score() {
            let fbuser = auth.currentUser.email
            const docRef = doc(db, "Students", String(fbuser));
            getDoc(docRef).then(doc => {
                let s = doc.data();
                let scores = s.scores
                let score = scores["math"]["Chap1"]
                if (score != undefined) {
                    this.chap1score = score
                }
                console.log("updated chap1 score: "+ this.chap1score)
            })
            return this.chap1score
        },
        getChap2Score() {
            let fbuser = auth.currentUser.email
            const docRef = doc(db, "Students", String(fbuser));
            getDoc(docRef).then(doc => {
                let s = doc.data();
                let scores = s.scores
                let score = scores["math"]["Chap2"]
                if (score != undefined) {
                    this.chap2score = score
                }
                console.log("updated chap2 score: "+ this.chap2score)
            })
            return this.chap2score
        },
        getChap3Score() {
            let fbuser = auth.currentUser.email
            const docRef = doc(db, "Students", String(fbuser));
            getDoc(docRef).then(doc => {
                let s = doc.data();
                let scores = s.scores
                let score = scores["math"]["Chap3"]
                if (score != undefined) {
                    this.chap3score = score
                }
                console.log("updated chap3 score: "+ this.chap3score)
            })
            return this.chap3score
        },
        getChap4Score() {
            let fbuser = auth.currentUser.email
            const docRef = doc(db, "Students", String(fbuser));
            getDoc(docRef).then(doc => {
                let s = doc.data();
                let scores = s.scores
                let score = scores["math"]["Chap4"]
                if (score != undefined) {
                    this.chap4score = score
                }
                console.log("updated chap4 score: "+ this.chap4score)
            })
            return this.chap4score
        },
        getChap5Score() {
            let fbuser = auth.currentUser.email
            const docRef = doc(db, "Students", String(fbuser));
            getDoc(docRef).then(doc => {
                let s = doc.data();
                let scores = s.scores
                let score = scores["math"]["Chap5"]
                if (score != undefined) {
                    this.chap5score = score
                }
                console.log("updated chap5 score: "+ this.chap5score)
            })
            return this.chap5score
        },
        getChap6Score() {
            let fbuser = auth.currentUser.email
            const docRef = doc(db, "Students", String(fbuser));
            getDoc(docRef).then(doc => {
                let s = doc.data();
                let scores = s.scores
                let score = scores["math"]["Chap6"]
                if (score != undefined) {
                    this.chap6score = score
                }
                console.log("updated chap6 score: "+ this.chap6score)
            })
            return this.chap6score
        },
        getChap7Score() {
            let fbuser = auth.currentUser.email
            const docRef = doc(db, "Students", String(fbuser));
            getDoc(docRef).then(doc => {
                let s = doc.data();
                let scores = s.scores
                let score = scores["math"]["Chap7"]
                if (score != undefined) {
                    this.chap7score = score
                }
                console.log("updated chap7 score: "+ this.chap7score)
            })
            return this.chap7score
        },

    },

    // asyncComputed: {
    //     getScore(subject, chapter) {
    //         let fbuser = auth.currentUser.email
    //         const docRef = doc(db, "Students", String(fbuser));
    //         getDoc(docRef).then(doc => {
    //             let s = doc.data();
    //             let score = s.String(subject).string(chapter)
    //             return score
    //         })
    //     }
    // }

}
</script>

<style scoped>
#modal {
    background-color:white;
    position: fixed;
    bottom:20%;
    right:25%;
    max-width: 1000px;
}

#button {
    /* cursor:pointer;
    transition-duration: 0.1s;
    text-align:center;
    font-size:15px;
    padding: 10px 20px 10px 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold; */
    cursor:pointer;
    transition-duration: 0.1s;
    text-align:center;
    font-size:15px;
    padding: 10px 20px 10px 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    background-color: #efefef;
    color: black;
    border-color: #767676;
    border-width: 1px;
    border-style: solid;
    /* border-bottom: 1px solid; */
    text-align:center;
    text-decoration: none;
    border-radius: 2px;
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
    display:inline-block;
    margin-left:35%;
    /* width: 100%; */
    margin-right: 25%;
}

#pageTitle {
    display:inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size:23px;
    /* margin-right:35%; */
    margin-top:1%;
}
#topicstable {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    
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
.router-link {
    cursor:pointer;
    transition-duration: 0.1s;
    text-align:center;
    font-size:15px;
    padding: 10px 20px 10px 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    background-color: #efefef;
    color: black;
    border-color: #767676;
    border-width: 1px;
    border-style: solid;
    /* border-bottom: 1px solid; */
    text-align:center;
    text-decoration: none;
    border-radius: 2px;
}

.router-link:hover {
    background-color: #6cc1cc;
}
</style>