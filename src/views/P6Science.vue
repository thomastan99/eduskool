<template>
  <BlueBanner/>
  <LeftPanel/>
     <div id="main">
        <div id="pageTitle"><h1> P6 Science </h1></div>
        <table id = "topicstable"> 
            <th> Syllabus </th>
            <th> Learning Videos </th>
            <th> Quiz Score </th>
            <th> Last Attempted Score </th>
            <tr>
                <td> 
                    <h3 class="syllabus"> Chapter 1: Listening and Viewing </h3>
                </td>
                <td> 
                    <button id="button" @click="wholeNumbers=!wholeNumbers">Watch</button>
                        <transition name="fade" appear>
                            <div id="modal-overlay" v-if="wholeNumbers" @click="wholeNumbers=!wholeNumbers"></div>
                        </transition>
                        <transition name="slide" appear>
                            <div id="modal" v-if="wholeNumbers">
                                <h1> Chapter 1: Whole Numbers </h1>
                                 <iframe width="950" height="500"
                                    src="https://www.youtube.com/embed/HAhg0uXn9GA?autoplay=1">
                                </iframe>
                            </div>
                        </transition>
                </td>
                <td> 
                    <!-- <button id="attempt">Attempt</button> -->
                    <router-link to="/ready" tag="button" v-on:click="update('Chap1','Science')">Attempt </router-link>
                    <!-- <a id="homeworkText" href="/quiz"> </a> -->
                </td>
                <td> 
                    <h3 class="marks"> 10/10 </h3>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class="syllabus"> Chapter 2:  </h2>
                </td>
                <td> 
                     <button id="button" @click="fractions=!fractions">Watch</button>
                        <transition name="fade" appear>
                            <div id="modal-overlay" v-if="fractions" @click="fractions=!fractions"></div>
                        </transition>
                        <transition name="slide" appear>
                            <div id="modal" v-if="fractions">
                                <h1> Chapter 2: Fractions </h1>
                                 <iframe width="950" height="500"
                                    src="https://www.youtube.com/embed/rl7e0djo9Go">
                                </iframe>
                            </div>
                        </transition>
                </td>
                <td> 
                    <router-link to="/ready" tag="button" v-on:click="update('Chap1','Math')">Attempt </router-link>
                </td>

                <td> 
                    <h3 class="marks"> 10/10 </h3>
                </td>
            </tr>
            <tr>
                <td>
                    <h3 class="syllabus"> Chapter 3: Systems </h3>
                </td>
                <td> 
                    <button id="button" @click="decimals=!decimals">Watch</button>
                            <transition name="fade" appear>
                                <div id="modal-overlay" v-if="decimals" @click="decimals=!decimals"></div>
                            </transition>
                            <transition name="slide" appear>
                                <div id="modal" v-if="decimals">
                                    <h1> Chapter 3: Decimals </h1>
                                    <iframe width="950" height="500"
                                        src="https://www.youtube.com/embed/UCBXoLb2ItI">
                                    </iframe>
                                </div>
                            </transition>
                </td>
                <td> 
                    <button id="attempt">Attempt</button>
                </td>
                <td> 
                    <h3 class="marks"> 8/10 </h3>
                </td>
            </tr>
             <tr>
                <td>
                    <h3 class="syllabus"> Chapter 4: Interactions </h3>
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
                    <button id="attempt">Attempt</button>
                </td>
                <td> 
                    <h3 class="marks"> No Attempt </h3>
                </td>

            </tr>
            <tr>
                <td>
                    <h3 class="syllabus"> Chapter 5: Energy </h3>
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
                    <button id="attempt">Attempt</button>
                </td>
                <td> 
                    <h3 class="marks"> No Attempt </h3>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore";
import { doc, updateDoc} from "firebase/firestore";
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
            currQuizChapter :"1",
            curQuizSubject :"math",
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

        }

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
    display:inline-block;
    margin-left:25%;
    width: 100%;
}

#pageTitle {
    display:inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size:23px;
    margin-right:35%;
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

</style>