<template>
    <div id="main">
        <div id="personal" onclick="location.href='/profile'">
            <div id="photo"> <img id="profilePic" src="../assets/photo.png" alt="Profile Pic">
            </div>
            <div id="overview">
                <h4 id="details">{{ user.displayName }} </h4>
            </div>
        </div>
        <div id="menu">
            <div class="options" onclick="location.href='/'">
                <img id="announcementImage" src="../assets/announcement.png" alt="Announcement Image">
                <a id="announcementText">Announcements</a>
            </div>

            <div class="options" onclick="location.href='/home'">
                <img id="topicsImage" src="../assets/topics.png" alt="Topics Image">
                <a id="topicsText">Topics</a>
            </div>

            <div class="options" onclick="location.href='/classes'">
                <img id="classesImage" src="../assets/classes.png" alt="Classes Image">
                <a id="classesText" >Classes</a>
            </div>

            <div class="options" onclick="location.href='/achievements'">
                <img id="achievementsImage" src="../assets/achievements.png" alt="Achievements Image">
                <a id="achievementsText">Achievements</a>
            </div>

            <div class="options">
                <img id="leaderboardImage" src="../assets/leaderboard.png" alt="Leaderboard Image">
                <a id="leaderboardText"  href="/LeaderboardMath">Leaderboard</a>

            </div>
        </div>
    </div>
    <!-- <div id="menu">
      <div class="options" onclick="location.href='/'">
        <img
          id="announcementImage"
          src="../assets/announcement.png"
          alt="Announcement Image"
        />
        <a id="announcementText">Announcements</a>
      </div>

      <div class="options" onclick="location.href='/home'">
        <img id="topicsImage" src="../assets/topics.png" alt="Topics Image" />
        <a id="topicsText">Topics</a>
      </div>

      <div class="options" onclick="location.href='/classes'">
        <img
          id="classesImage"
          src="../assets/classes.png"
          alt="Classes Image"
        />
        <a id="classesText">Classes</a>
      </div>

      <div class="options" onclick="location.href='/achievements'">
        <img
          id="achievementsImage"
          src="../assets/achievements.png"
          alt="Achievements Image"
        />
        <a id="achievementsText">Achievements</a>
      </div>

      <div class="options">
        <img
          id="leaderboardImage"
          src="../assets/leaderboard.png"
          alt="Leaderboard Image"
        />
        <a id="leaderboardText" href="/LeaderboardMath">Leaderboard</a>
      </div>

      <div class="options">
        <img
          id="commentsImage"
          src="../assets/comments.png"
          alt="Comments Image"
        />
        <a id="commentsText" href="/">Comments</a>
        <a href="/"></a>
      </div>
    </div> -->

  <router-view />
</template>

<script>
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, updateDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);
export default {
  data: () => {
    return {
      user: false,
    };
  },

  mounted() {
    const auth = getAuth(auth);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        console.log(user.photoURL == null);
        if (user.photoURL == null) {
          return 
        } else {
          document.getElementById("profilePic").src = user.photoURL;
        }
      }
    });
    async function updateScores() {
      let x = await getDocs(collection(db, "Students"));
      x.forEach((docs) => {
        let s = docs.data();
        let scores = s.scores;
        let eng = scores.eng;
        let math = scores.math;
        let sci = scores.sci;
        let temp_eng = 0;
        let temp_sci = 0;
        let temp_math = 0;
        for (const [key, value] of Object.entries(eng)) {
          console.log(key, value);
          temp_eng = temp_eng + value;
        }
        for (const [key, value] of Object.entries(math)) {
          console.log(key, value);
          temp_math = temp_math + value;
        }
        for (const [key, value] of Object.entries(sci)) {
          console.log(key, value);
          temp_sci = temp_sci + value;
        }
        updateDoc(docs.ref, {
          wk_eng: temp_eng,
          wk_math: temp_math,
          wk_sci: temp_sci,
        });
      });

      console.log("Updated Leaderboard");
    }
    updateScores();
  },
};
</script>

<style scoped>
#commentsText {
  position: relative;
  left: 75px;
  top: 15px;
}
#commentsImage {
  height: 20%;
  width: 20%;
  position: relative;
  top: 7px;
  right: 120px;
}
#leaderboardText {
  position: relative;
  left: 75px;
  top: 20px;
}
#leaderboardImage {
  height: 20%;
  width: 28%;
  position: relative;
  top: 5px;
  right: 129px;
}
#achievementsText {
  position: relative;
  left: 75px;
  top: 18px;
}
#achievementsImage {
  height: 20%;
  width: 23%;
  position: relative;
  top: 5px;
  right: 137px;
}
#homeworkText {
  position: relative;
  left: 75px;
  top: 15px;
}
#homeworkImage {
  height: 20%;
  width: 20%;
  position: relative;
  top: 4px;
  right: 125px;
}
#topicsText {
  position: relative;
  left: 75px;
  top: 15px;
}
#topicsImage {
  height: 20%;
  width: 20%;
  position: relative;
  top: 1px;
  right: 103px;
}
#announcementText {
  position: relative;
  left: 75px;
  top: 20px;
}
#announcementImage {
  height: 50%;
  width: 30%;
  position: relative;
  top: 6px;
  right: 145px;
}
#classesText {
  position: relative;
  left: 75px;
  top: 12px;
}
#classesImage {
  height: 50%;
  width: 20%;
  position: relative;
  right: 108px;
  top: 3px;
}
#photo {
  margin-top: 8%;
  float: left;
  display: inline-block;
}

#personal {
  cursor: pointer;
}
#overview {
    float: left;
    display: inline-block;
    color: #00bcd4;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: left;
    line-height: 1.5;
}

#details {
  width: 100%;
  position: relative;
  left: 10px;
  top: 25px;
}

#main {
  position: fixed;
  margin-top: 35px;
  margin-left: 20px;
}

#profilePic {
  max-width: 8em;
}

#menu {
    float: left;
    background-color: #ececec;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 442px;
    width: 250px;
    margin-top:10px;
}

.options {
    border:1px solid grey;
    border-radius: 5px;
    padding: 10px 20px 20px 10px;
}

.options:hover {
  cursor: pointer;
  background-color: #d6e0e2;
}

a {
  color: #6cc1cc;
  font-size: 19px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  float: left;
}

a:visited,
a:link,
a:active {
  text-decoration: none;
}
</style>