<template>
    <BlueBanner/>
    <LeftPanel/>
    <div class="classesPage" id="pageLoader" v-if="loading"> <Preloader color="grey" scale = "0.8"/> </div>
    <div class="classesPage" id="main" v-if="!loading">
        <div id="pageTitle"><h1> Classes </h1></div>
        <div id="legend">
            <h3><u> Legend </u></h3>
            <div id="lightgrey" class="block"> Available Class </div>
            <div id="green" class="block"> Chosen Class </div>
            <div id="grey" class="block"> Unavailable Class</div>
        </div>
        <table v-if="!loading" id ="classestable"> 
            <th> </th>
            <th> Monday </th>
            <th> Tuesday </th>
            <th> Wednesday </th>
            <th> Thursday </th>
            <th> Friday </th>
            <th> Saturday </th>
            <th> Sunday </th>
            <tr> 
                <td id="timeslot">10:00 AM - 12:00 PM</td> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td v-if="satTenToTwelveStatus && userrole == 'P5Student'" class="classoptions" id="Maths5" @click="isOpen=!isOpen; updateSatTenToTwelve()"> Maths 5C Class Size: {{maths5Csize}} </td>
                <td v-if="!satTenToTwelveStatus" class="classoptionsSelected"> Maths 5C Class Size: {{maths5Csize}} </td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied"> Maths 5C Class Size: {{maths5Csize}} </td>
                <td v-if="sunTenToTwelveStatus && userrole == 'P5Student'" class="classoptions" id="sun10-12" @click="isOpen=!isOpen; updateSunTenToTwelve()"> Science 5C Class Size: {{science5Csize}} </td>
                <td v-if="!sunTenToTwelveStatus" class="classoptionsSelected" id="sun10-12"> Science 5C Class Size: {{science5Csize}} </td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="sun10-12"> Science 5C Class Size: {{science5Csize}} </td>
            </tr>
            <tr> 
                <td id="timeslot">12:00 PM - 2:00 PM</td> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td v-if="satTwelveToTwoStatus && userrole == 'P5Student'" class="classoptions" id="sat12-2" @click="isOpen=!isOpen; updateSatTwelveToTwo()">English 5B Class Size: {{english5Bsize}}</td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="sat12-2">English 5B Class Size: {{english5Bsize}}</td>
                <td v-if="!satTwelveToTwoStatus" class="classoptionsSelected" id="sat12-2">English 5B Class Size: {{english5Bsize}}</td>
                <td v-if="sunTwelveToTwoStatus && userrole == 'P5Student'" class="classoptions" id="sun12-2" @click="isOpen=!isOpen; updateSunTwelveToTwo()">English 5C Class Size: {{english5Csize}}</td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="sun12-2">English 5C Class Size: {{english5Csize}}</td>
                <td v-if="!sunTwelveToTwoStatus" class="classoptionsSelected" id="sun12-2">English 5C Class Size: {{english5Csize}}</td>
            </tr>
            <tr > 
                <td id="timeslot">2:00 PM - 4:00 PM</td> 
                <td v-if="monTwoToFourStatus && userrole == 'P5Student'" class="classoptions" id="mon2-4" @click="isOpen=!isOpen; updateMonTwoToFour()"> Science 5A Class Size: {{science5Asize}}</td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="mon2-4">Science 5A Class Size: {{science5Asize}}</td>
                <td v-if="!monTwoToFourStatus" class="classoptionsSelected" id="mon2-4">Science 5A Class Size: {{science5Asize}}</td>

                <td v-if="tuesTwoToFourStatus && userrole == 'P5Student'" class="classoptions" id="tues2-4" @click="isOpen=!isOpen; updateTuesTwoToFour()">English 5A Class Size: {{english5Asize}}</td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="tues2-4">English 5A Class Size: {{english5Asize}}</td>
                <td v-if="!tuesTwoToFourStatus" class="classoptionsSelected" id="tues2-4">English 5A Class Size: {{english5Asize}}</td>

                <td v-if="wedsTwoToFourStatus && userrole == 'P5Student'" class="classoptions" id="weds2-4" @click="isOpen=!isOpen; updateWedsTwoToFour()">Maths 5A Class Size: {{maths5Asize}}</td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="weds2-4">Maths 5A Class Size: {{maths5Asize}}</td>
                <td v-if="!wedsTwoToFourStatus" class="classoptionsSelected" id="weds2-4">Maths 5A Class Size: {{maths5Asize}}</td>

                <td v-if="thursTwoToFourStatus && userrole == 'P6Student'" class="classoptions" id="thurs2-4" @click="isOpen=!isOpen; updateThursTwoToFour()">Maths 6B Class Size: {{maths6Bsize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="thurs2-4">Maths 6B Class Size: {{maths6Bsize}}</td>
                <td v-if="!thursTwoToFourStatus" class="classoptionsSelected" id="thurs2-4">Maths 6B Class Size: {{maths6Bsize}}</td>

                <td v-if="friTwoToFourStatus && userrole == 'P5Student'" class="classoptions" id="fri2-4" @click="isOpen=!isOpen; updateFriTwoToFour()">Science 5B Class Size: {{science5Bsize}}</td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="fri2-4">Science 5B Class Size: {{science5Bsize}}</td>
                <td v-if="!friTwoToFourStatus" class="classoptionsSelected" id="fri2-4">Science 5B Class Size: {{science5Bsize}}</td>

                <td v-if="satTwoToFourStatus && userrole == 'P6Student'" class="classoptions" id="sat2-4" @click="isOpen=!isOpen; updateSatTwoToFour()">English 6B Class Size: {{english6Bsize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="sat2-4">English 6B Class Size: {{english6Bsize}}</td>
                <td v-if="!satTwoToFourStatus" class="classoptionsSelected" id="sat2-4">English 6B Class Size: {{english6Bsize}}</td>

                <td v-if="sunTwoToFourStatus && userrole == 'P6Student'" class="classoptions" id="sun2-4" @click="isOpen=!isOpen; updateSunTwoToFour()">English 6C Class Size: {{english6Csize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="sun2-4">English 6C Class Size: {{english6Csize}}</td>
                <td v-if="!sunTwoToFourStatus" class="classoptionsSelected" id="sun2-4">English 6C Class Size: {{english6Csize}}</td>
            </tr>
            <tr> 
                <td id="timeslot">4:00 PM - 6:00 PM</td> 
                <td v-if="monFourToSixStatus && userrole == 'P6Student'" class="classoptions" id="mon4-6" @click="isOpen=!isOpen; updateMonFourToSix()">Maths 6A Class Size: {{maths6Asize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="mon4-6">Maths 6A Class Size: {{maths6Asize}}</td>
                <td v-if="!monFourToSixStatus" class="classoptionsSelected" id="mon4-6">Maths 6A Class Size: {{maths6Asize}}</td>

                <td v-if="tuesFourToSixStatus && userrole == 'P6Student'" class="classoptions" id="tues4-6" @click="isOpen=!isOpen; updateTuesFourToSix()">English 6A Class Size: {{english6Asize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="tues4-6">English 6A Class Size: {{english6Asize}}</td>
                <td v-if="!tuesFourToSixStatus" class="classoptionsSelected" id="tues4-6">English 6A Class Size: {{english6Asize}}</td>

                <td v-if="wedsFourToSixStatus && userrole == 'P6Student'" class="classoptions" id="weds4-6" @click="isOpen=!isOpen; updateWedsFourToSix()">Science 6A Class Size: {{science6Asize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="weds2-4">Science 6A Class Size: {{science6Asize}}</td>
                <td v-if="!wedsFourToSixStatus" class="classoptionsSelected" id="weds2-4">Science 6A Class Size: {{science6Asize}}</td>

                <td v-if="thursFourToSixStatus && userrole == 'P6Student'" class="classoptions" id="thurs4-6" @click="isOpen=!isOpen; updateThursFourToSix()">Maths 6C Class Size: {{maths6Csize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="thurs4-6">Maths 6C Class Size: {{maths6Csize}}</td>
                <td v-if="!thursFourToSixStatus" class="classoptionsSelected" id="thurs4-6">Maths 6C Class Size: {{maths6Csize}}</td>
                
                <td v-if="friFourToSixStatus && userrole == 'P5Student'" class="classoptions" id="fri4-6" @click="isOpen=!isOpen; updateFriFourToSix()">Maths 5B Class Size: {{maths5Bsize}}</td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="fri4-6">Maths 5B Class Size: {{maths5Bsize}}</td>
                <td v-if="!friFourToSixStatus" class="classoptionsSelected" id="fri4-6">Maths 5B Class Size: {{maths5Bsize}}</td>

                <td v-if="satFourToSixStatus && userrole == 'P6Student'" class="classoptions" id="sat4-6" @click="isOpen=!isOpen; updateSatFourToSix()">Science 6C Class Size: {{science6Csize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="sat4-6">Science 6C Class Size: {{science6Csize}}</td>
                <td v-if="!satFourToSixStatus" class="classoptionsSelected" id="sat4-6">Science 6C Class Size: {{science6Csize}}</td>

                <td v-if="sunFourToSixStatus && userrole == 'P6Student'" class="classoptions" id="sun4-6" @click="isOpen=!isOpen; updateSunFourToSix()">Science 6B Class Size: {{science6Bsize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="sun4-6">Science 6B Class Size: {{science6Bsize}}</td>
                <td v-if="!sunFourToSixStatus" class="classoptionsSelected" id="sun4-6">Science 6B Class Size: {{science6Bsize}}</td>
            </tr>
            <tr> 
                <td id="timeslot">6:00 PM - 8:00 PM</td> 
                <td v-if="monSixToEightStatus && userrole == 'P5Student'" class="classoptions" id="mon6-8" @click="isOpen=!isOpen; updateMonSixToEight()">P5 Maths Optional Class Size: {{p5mathsoptionalsize}}</td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="mon6-8">P5 Maths Optional Class Size: {{p5mathsoptionalsize}}</td>
                <td v-if="!monSixToEightStatus" class="classoptionsSelected" id="mon6-8">P5 Maths Optional Class Size: {{p5mathsoptionalsize}}</td>

                <td v-if="tuesSixToEightStatus && userrole == 'P5Student'" class="classoptions" id="tues6-8" @click="isOpen=!isOpen; updateTuesSixToEight()">P5 English Optional Class Size: {{p5englishoptionalsize}}</td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="tues6-8">P5 English Optional Class Size: {{p5englishoptionalsize}}</td>
                <td v-if="!tuesSixToEightStatus" class="classoptionsSelected" id="tues6-8">P5 English Optional Class Size: {{p5englishoptionalsize}}</td>

                <td v-if="wedsSixToEightStatus && userrole == 'P5Student'" class="classoptions" id="weds6-8" @click="isOpen=!isOpen; updateWedsSixToEight()">P5 Science Optional Class Size: {{p5scienceoptionalsize}}</td>
                <td v-if="userrole != 'P5Student'" class="classoptionsOccupied" id="weds6-8">P5 Science Optional Class Size: {{p5scienceoptionalsize}}</td>
                <td v-if="!wedsSixToEightStatus" class="classoptionsSelected" id="weds6-8">P5 Science Optional Class Size: {{p5scienceoptionalsize}}</td>

                <td v-if="thursSixToEightStatus && userrole == 'P6Student'" class="classoptions" id="thurs6-8" @click="isOpen=!isOpen; updateThursSixToEight()">P6 Maths Optional Class Size: {{p6mathsoptionalsize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="thurs6-8">P6 Maths Optional Class Size: {{p6mathsoptionalsize}}</td>
                <td v-if="!thursSixToEightStatus" class="classoptionsSelected" id="thurs6-8">P6 Maths Optional Class Size: {{p6mathsoptionalsize}}</td>

                <td v-if="friSixToEightStatus && userrole == 'P6Student'" class="classoptions" id="fri6-8" @click="isOpen=!isOpen; updateFriSixToEight()">P6 Science Optional Class Size: {{p6scienceoptionalsize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="fri6-8">P6 Science Optional Class Size: {{p6scienceoptionalsize}}</td>
                <td v-if="!friSixToEightStatus" class="classoptionsSelected" id="fri6-8">P6 Science Optional Class Size: {{p6scienceoptionalsize}}</td>

                <td v-if="satSixToEightStatus && userrole == 'P6Student'" class="classoptions" id="sat4-6" @click="isOpen=!isOpen; updateSatSixToEight()">P6 English Optional Class Size: {{p6englishoptionalsize}}</td>
                <td v-if="userrole != 'P6Student'" class="classoptionsOccupied" id="sat6-8">P6 English Optional Class Size: {{p6englishoptionalsize}}</td>
                <td v-if="!satSixToEightStatus" class="classoptionsSelected" id="sat6-8">P6 English Optional Class Size: {{p6englishoptionalsize}}</td>
            </tr>
        </table>
        <transition name="fade" appear>
            <div id="modal-overlay" v-if="isOpen" @click="isOpen=!isOpen"></div>
        </transition>
        <transition name="slide" appear>
            <div id="modal" v-if="isOpen">
                <h1>Confirm Enrollment?</h1>
                <h2 id="classinfo">{{ classinfo }}</h2>
                <h3 id="classinfo">{{ classtimeinfo }}</h3>
                <h4 id="announcement"> This action cannot be revoked.</h4>
                <button id="yes" @click="yes(user); isOpen=!isOpen">Yes</button>
                <button id="no" @click="isOpen=!isOpen">No</button>
            </div>
        </transition>
    </div>
</template>

<script>
import BlueBanner from "@/components/BlueBanner.vue"
import LeftPanel from "@/components/LeftPanel.vue"
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore";
import {getDoc, updateDoc, doc, arrayUnion, increment, collection, getDocs} from "firebase/firestore";
import Preloader from '../components/Preloader.vue'
import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const db = getFirestore(firebaseApp)
var satTenToTwelveStatus = ref(false); var sunTenToTwelveStatus = ref(false); 
var satTwelveToTwoStatus = ref(false); var sunTwelveToTwoStatus = ref(false);
var monTwoToFourStatus = ref(false); var tuesTwoToFourStatus = ref(false); var wedsTwoToFourStatus = ref(false); var thursTwoToFourStatus = ref(false); var friTwoToFourStatus = ref(false);
var satTwoToFourStatus = ref(false); var sunTwoToFourStatus = ref(false);
var monFourToSixStatus = ref(false); var tuesFourToSixStatus = ref(false); var wedsFourToSixStatus = ref(false); var thursFourToSixStatus = ref(false); var friFourToSixStatus = ref(false);
var satFourToSixStatus = ref(false); var sunFourToSixStatus = ref(false);
var monSixToEightStatus = ref(false); var tuesSixToEightStatus = ref(false); var wedsSixToEightStatus = ref(false); var thursSixToEightStatus = ref(false); var friSixToEightStatus = ref(false);
var satSixToEightStatus = ref(false); var sunSixToEightStatus = ref(false);
var loading = ref(true);
var classtimeinfo = ref("");
var classinfo = ref("")
var email = ref("");
var english5Asize = ref(0); var english5Bsize = ref(0); var english5Csize = ref(0);
var science5Asize = ref(0); var science5Bsize = ref(0); var science5Csize = ref(0);
var maths5Asize = ref(0); var maths5Bsize = ref(0); var maths5Csize = ref(0);
var english6Asize = ref(0); var english6Bsize = ref(0); var english6Csize = ref(0);
var science6Asize = ref(0); var science6Bsize = ref(0); var science6Csize = ref(0);
var maths6Asize = ref(0); var maths6Bsize = ref(0); var maths6Csize = ref(0);
var p5mathsoptionalsize = ref(0); var p5englishoptionalsize = ref(0); var p5scienceoptionalsize = ref(0);
var p6mathsoptionalsize = ref(0); var p6englishoptionalsize = ref(0); var p6scienceoptionalsize = ref(0);
var userrole = ref("");

export default {
    data: () => {
        return {
            p5mathsoptionalsize: p5mathsoptionalsize, p5englishoptionalsize: p5englishoptionalsize, p5scienceoptionalsize: p5scienceoptionalsize,
            p6mathsoptionalsize: p6mathsoptionalsize, p6englishoptionalsize: p6englishoptionalsize, p6scienceoptionalsize: p6scienceoptionalsize,
            userrole: userrole,
            english5Asize: english5Asize, english5Bsize: english5Bsize, english5Csize: english5Csize,
            science5Asize: science5Asize, science5Bsize: science5Bsize, science5Csize: science5Csize,
            maths5Asize: maths5Asize, maths5Bsize: maths5Bsize, maths5Csize: maths5Csize,
            english6Asize: english6Asize, english6Bsize: english6Bsize, english6Csize: english6Csize,
            science6Asize: science6Asize, science6Bsize: science6Bsize, science6Csize: science6Csize,
            maths6Asize: maths6Asize, maths6Bsize: maths6Bsize, maths6Csize: maths6Csize,
            isOpen: false,
            loading: loading,
            classtimeinfo: classtimeinfo,
            classinfo: classinfo,
            satTenToTwelveStatus: satTenToTwelveStatus, sunTenToTwelveStatus: sunTenToTwelveStatus,
            satTwelveToTwoStatus: satTwelveToTwoStatus, sunTwelveToTwoStatus: sunTwelveToTwoStatus,
            monTwoToFourStatus: monTwoToFourStatus, tuesTwoToFourStatus: tuesTwoToFourStatus, wedsTwoToFourStatus: wedsTwoToFourStatus, thursTwoToFourStatus: thursTwoToFourStatus, friTwoToFourStatus: friTwoToFourStatus,
            satTwoToFourStatus: satTwoToFourStatus, sunTwoToFourStatus: sunTwoToFourStatus,
            monFourToSixStatus: monFourToSixStatus, tuesFourToSixStatus: tuesFourToSixStatus, wedsFourToSixStatus: wedsFourToSixStatus, thursFourToSixStatus: thursFourToSixStatus, friFourToSixStatus: friFourToSixStatus,
            satFourToSixStatus: satFourToSixStatus, sunFourToSixStatus: sunFourToSixStatus,
            monSixToEightStatus: monSixToEightStatus, tuesSixToEightStatus: tuesSixToEightStatus, wedsSixToEightStatus: wedsSixToEightStatus, thursSixToEightStatus: thursSixToEightStatus, friSixToEightStatus: friSixToEightStatus,
            satSixToEightStatus: satSixToEightStatus, sunSixToEightStatus: sunSixToEightStatus,
        }
  },
  methods: {
        updateSatTenToTwelve(){classtimeinfo.value = "Saturday 10:00AM - 12:00PM", classinfo.value = "Maths 5C"},
        updateSunTenToTwelve(){classtimeinfo.value = "Sunday 10:00AM - 12:00PM", classinfo.value = "Science 5C"},

        updateSatTwelveToTwo(){classtimeinfo.value = "Saturday 12:00PM - 2:00PM", classinfo.value = "English 5B"},
        updateSunTwelveToTwo(){classtimeinfo.value = "Sunday 12:00PM - 2:00PM", classinfo.value = "English 5C"},

        updateMonTwoToFour(){classtimeinfo.value = "Monday 2:00PM - 4:00PM", classinfo.value = "Science 5A"},
        updateTuesTwoToFour(){classtimeinfo.value = "Tuesday 2:00PM - 4:00PM", classinfo.value = "English 5A"},
        updateWedsTwoToFour(){classtimeinfo.value = "Wednesday 2:00PM - 4:00PM", classinfo.value = "Maths 5A"},
        updateThursTwoToFour(){classtimeinfo.value = "Thursday 2:00PM - 4:00PM", classinfo.value = "Maths 6B"},
        updateFriTwoToFour(){classtimeinfo.value = "Friday 2:00PM - 4:00PM", classinfo.value = "Science 5B"}, 
        updateSatTwoToFour(){classtimeinfo.value = "Saturday 2:00PM - 4:00PM", classinfo.value = "English 6B"},
        updateSunTwoToFour(){classtimeinfo.value = "Sunday 2:00PM - 4:00PM", classinfo.value = "English 6C"},

        updateMonFourToSix(){classtimeinfo.value = "Monday 4:00PM - 6:00PM", classinfo.value = "Maths 6A"},
        updateTuesFourToSix(){classtimeinfo.value = "Tuesday 4:00PM - 6:00PM", classinfo.value = "English 6A"},
        updateWedsFourToSix(){classtimeinfo.value = "Wednesday 4:00PM - 6:00PM", classinfo.value = "Science 6A"},
        updateThursFourToSix(){classtimeinfo.value = "Thursday 4:00PM - 6:00PM", classinfo.value = "Maths 6C"},
        updateFriFourToSix(){classtimeinfo.value = "Friday 4:00PM - 6:00PM", classinfo.value = "Maths 5B"}, 
        updateSatFourToSix(){classtimeinfo.value = "Saturday 4:00PM - 6:00PM", classinfo.value = "Science 6C"},
        updateSunFourToSix(){classtimeinfo.value = "Sunday 4:00PM - 6:00PM", classinfo.value = "Science 6B"},

        updateMonSixToEight(){classtimeinfo.value = "Monday 6:00PM - 8:00PM", classinfo.value = "P5MathsOptional"},
        updateTuesSixToEight(){classtimeinfo.value = "Tuesday 6:00PM - 8:00PM", classinfo.value = "P5EnglishOptional"},
        updateWedsSixToEight(){classtimeinfo.value = "Wednesday 6:00PM - 8:00PM", classinfo.value = "P5ScienceOptional"},
        updateThursSixToEight(){classtimeinfo.value = "Thursday 6:00PM - 8:00PM", classinfo.value = "P6MathsOptional"},
        updateFriSixToEight(){classtimeinfo.value = "Friday 6:00PM - 8:00PM", classinfo.value = "P6ScienceOptional"}, 
        updateSatSixToEight(){classtimeinfo.value = "Saturday 6:00PM - 8:00PM", classinfo.value = "P6EnglishOptional"},
        
        async yes(user) {
            //10AM - 12PM
            if (classtimeinfo.value == "Saturday 10:00AM - 12:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.satTenToTwelve"] : false
            }),
                await updateDoc(doc(db, "Classes", "Maths5C"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Sunday 10:00AM - 12:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.sunTenToTwelve"] : false
            }),
                await updateDoc(doc(db, "Classes", "Science5C"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            //12PM - 2PM
            if (classtimeinfo.value == "Saturday 12:00PM - 2:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.satTwelveToTwo"] : false
            }),
                await updateDoc(doc(db, "Classes", "English5B"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Sunday 12:00PM - 2:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.sunTwelveToTwo"] : false
            }),
                await updateDoc(doc(db, "Classes", "English5C"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            //2PM - 4PM
            if (classtimeinfo.value == "Monday 2:00PM - 4:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.monTwoToFour"] : false
            }),
                await updateDoc(doc(db, "Classes", "Science5A"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Tuesday 2:00PM - 4:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.tuesTwoToFour"] : false
            }),
                await updateDoc(doc(db, "Classes", "English5A"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Wednesday 2:00PM - 4:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.wedsTwoToFour"] : false
            }),
                await updateDoc(doc(db, "Classes", "Maths5A"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Thursday 2:00PM - 4:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.thursTwoToFour"] : false
            }),
                await updateDoc(doc(db, "Classes", "Maths6B"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Friday 2:00PM - 4:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.friTwoToFour"] : false
            }),
                await updateDoc(doc(db, "Classes", "Science5B"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Saturday 2:00PM - 4:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.satTwoToFour"] : false
            }),
                await updateDoc(doc(db, "Classes", "English6B"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Sunday 2:00PM - 4:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.sunTwoToFour"] : false
            }),
                await updateDoc(doc(db, "Classes", "English6C"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            //4PM - 6PM
            if (classtimeinfo.value == "Monday 4:00PM - 6:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.monFourToSix"] : false
            }),
                await updateDoc(doc(db, "Classes", "Maths6A"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Tuesday 4:00PM - 6:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.tuesFourToSix"] : false
            }),
                await updateDoc(doc(db, "Classes", "English6A"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Wednesday 4:00PM - 6:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.wedsFourToSix"] : false
            }),
                await updateDoc(doc(db, "Classes", "Science6A"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Thursday 4:00PM - 6:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.thursFourToSix"] : false
            }),
                await updateDoc(doc(db, "Classes", "Maths6C"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Friday 4:00PM - 6:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.friFourToSix"] : false
            }),
                await updateDoc(doc(db, "Classes", "Maths5B"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Saturday 4:00PM - 6:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.satFourToSix"] : false
            }),
                await updateDoc(doc(db, "Classes", "Science6C"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Sunday 4:00PM - 6:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.sunFourToSix"] : false
            }),
                await updateDoc(doc(db, "Classes", "Science6B"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            //6PM - 8PM
            if (classtimeinfo.value == "Monday 6:00PM - 8:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.monSixToEight"] : false
            }),
                await updateDoc(doc(db, "Classes", "P5MathsOptional"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Tuesday 6:00PM - 8:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.tuesSixToEight"] : false
            }),
                await updateDoc(doc(db, "Classes", "P5EnglishOptional"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Wednesday 6:00PM - 8:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.wedsSixToEight"] : false
            }),
                await updateDoc(doc(db, "Classes", "P5ScienceOptional"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Thursday 6:00PM - 8:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.thursSixToEight"] : false
            }),
                await updateDoc(doc(db, "Classes", "P6MathsOptional"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Friday 6:00PM - 8:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.friSixToEight"] : false
            }),
                await updateDoc(doc(db, "Classes", "P6ScienceOptional"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            if (classtimeinfo.value == "Saturday 6:00PM - 8:00PM") {
                await updateDoc(doc(db, "Students", user.email), {
                    ["timetable.satSixToEight"] : false
            }),
                await updateDoc(doc(db, "Classes", "P6EnglishOptional"), {
                    students: arrayUnion(user.email),
                    size: increment(1)
                })
            }
            location.reload();
        }   
  },

name: 'Classes',
    components: {
    LeftPanel,
    BlueBanner,
    Preloader,
  },

  mounted() {
       const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
            this.user = user;
            timetable(user);
      }
    });
    async function timetable(user) {
        let docRef = doc(db, "Users", user.email);
        let docSnap = await getDoc(docRef);
        userrole.value = docSnap.data().role;
        email.value = user.email;
        docRef = doc(db, "Students", user.email);
        docSnap = await getDoc(docRef);
        var snapData = docSnap.data();
        var timetable = snapData.timetable;
        loading.value = timetable.loading;
        //10AM - 12PM
        satTenToTwelveStatus.value = timetable.satTenToTwelve;
        sunTenToTwelveStatus.value = timetable.sunTenToTwelve;
        //12PM - 2PM
        satTwelveToTwoStatus.value = timetable.satTwelveToTwo;
        sunTwelveToTwoStatus.value = timetable.sunTwelveToTwo;
        //2PM - 4PM
        monTwoToFourStatus.value = timetable.monTwoToFour;
        tuesTwoToFourStatus.value = timetable.tuesTwoToFour;
        wedsTwoToFourStatus.value = timetable.wedsTwoToFour;
        thursTwoToFourStatus.value = timetable.thursTwoToFour;
        friTwoToFourStatus.value = timetable.friTwoToFour;
        satTwoToFourStatus.value = timetable.satTwoToFour;
        sunTwoToFourStatus.value = timetable.sunTwoToFour;
        //4PM - 6PM
        monFourToSixStatus.value = timetable.monFourToSix;
        tuesFourToSixStatus.value = timetable.tuesFourToSix;
        wedsFourToSixStatus.value = timetable.wedsFourToSix;
        thursFourToSixStatus.value = timetable.thursFourToSix;
        friFourToSixStatus.value = timetable.friFourToSix;
        satFourToSixStatus.value = timetable.satFourToSix;
        sunFourToSixStatus.value = timetable.sunFourToSix;
        //6PM - 8PM
        monSixToEightStatus.value = timetable.monSixToEight;
        tuesSixToEightStatus.value = timetable.tuesSixToEight;
        wedsSixToEightStatus.value = timetable.wedsSixToEight;
        thursSixToEightStatus.value = timetable.thursSixToEight;
        friSixToEightStatus.value = timetable.friSixToEight;
        satSixToEightStatus.value = timetable.satSixToEight;
        docRef = await getDocs(collection(db, "Classes"))    
        docRef.forEach((docs) => {
            let d = docs.data()
            if (docs.id == "English5A") {
                english5Asize.value = d.size;
            } if (docs.id == "English5B") {
                english5Bsize.value = d.size;
            } if (docs.id == "English5C") {
                english5Csize.value = d.size;
            } if (docs.id == "Maths5A") {
                maths5Asize.value = d.size;
            } if (docs.id == "Maths5B") {
                maths5Bsize.value = d.size;
            } if (docs.id == "Maths5C") {
                maths5Csize.value = d.size;
            } if (docs.id == "Science5A") {
                science5Asize.value = d.size;
            } if (docs.id == "Science5B") {
                science5Bsize.value = d.size;
            } if (docs.id == "Science5A") {
                science5Csize.value = d.size;
            } if (docs.id == "English6A") {
                english6Asize.value = d.size;
            } if (docs.id == "English6B") {
                english6Bsize.value = d.size;
            } if (docs.id == "English6C") {
                english6Csize.value = d.size;
            } if (docs.id == "Maths6A") {
                maths6Asize.value = d.size;
            } if (docs.id == "Maths6B") {
                maths6Bsize.value = d.size;
            } if (docs.id == "Maths6C") {
                maths6Csize.value = d.size;
            } if (docs.id == "Science6A") {
                science6Asize.value = d.size;
            } if (docs.id == "Science6B") {
                science6Bsize.value = d.size;
            } if (docs.id == "Science6A") {
                science6Csize.value = d.size;
            } if (docs.id == "P5MathsOptional") {
                p5mathsoptionalsize.value = d.size;
            } if (docs.id == "P5EnglishOptional") {
                p5englishoptionalsize.value = d.size;
            } if (docs.id == "P5ScienceOptional") {
                p5scienceoptionalsize.value = d.size;
            } if (docs.id == "P6MathsOptional") {
                p6mathsoptionalsize.value = d.size;
            } if (docs.id == "P6EnglishOptional") {
                p6englishoptionalsize.value = d.size;
            } if (docs.id == "P6ScienceOptional") {
                p6scienceoptionalsize.value = d.size;
            }
        })
    }   
  }
}
</script>

<style scoped>
#timeslot {
    font-size: 15px;
    font-weight: bold;
}
#pageTitle {
    display: inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size:23px;
    margin-left: 150px;
}
#legend {
    float: right;
    display: inline-block;
    margin-right: 20px;
}
#lightgrey {
    background-color: #d6e0e2;
}
#grey {
    background-color: grey;
}
#green {
    background-color: lightgreen;
}
.block {
    font-size: 13px;
    display: inline-block;
    width: max-content;
    margin: 5px 10px 5px 20px;
    padding: 15px 15px 15px 15px;
}

#yes, #no {
    background-color: #00bcd4;
    color: white;
    border: none;
    margin: 0px 40px 0px 40px;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 0.1s;
    margin-top: 10px;
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

#modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 60%;
    height: 40%;
    max-width: 500px;
    background-color: #fff;
    border-radius: 16px;
    padding: 25px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
#main {
    display: inline-block;
    margin-left: 280px;
    margin-top: 50px;
}
th{
    text-align: center;
    font-size: 15px;
    border-bottom: 1px solid black;
}
td {
    font-size: 13px;
    border-bottom: 1px solid;
    text-align:center;
    padding: 30px 20px 30px 20px;

}

a {
    color: #6cc1cc;
    font-size: 19px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    float: left;
}
.classoptions {
    background-color: rgb(243, 242, 242);
    padding: 30px 25px 30px 25px;
}
.classoptionsOccupied {
    padding: 30px 25px 30px 25px;
    background-color: grey;
}
.classoptions:hover {
    cursor: pointer;
    background-color: #d6e0e2;
}
.classoptionsSelected {
    padding: 30px 25px 30px 25px;
    background-color: lightgreen;
}
a:visited, a:link, a:active {
    text-decoration: none;
}
#pageLoader {
    margin-top: 300px;
    margin-left: 250px;
}

</style>