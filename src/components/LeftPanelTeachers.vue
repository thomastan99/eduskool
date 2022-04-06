<template>
    <div id="main">
        <div id="personal" onclick="location.href='/profile'">
            <div id="photo"><img src="../assets/photo.png" alt="Profile Pic"></div>
            <div id="overview">
                <h4 id="details">{{user.displayName}}</h4>
            </div>
        </div>
        <div id="menu">
            <div class="options" onclick="location.href='/teachershome'">
                <img id="homeImage" src="../assets/home.png" alt="Home Image">
                <a id="homeText">Home Page</a>
            </div>
            
            <div class="options" onclick="location.href='/teachersannouncements'">
                <img id="announcementImage" src="../assets/announcement.png" alt="Announcement Image">
                <a id="announcementText">Announcements</a>
            </div>

            <div class="options" onclick="location.href='/teacherscs'">
                <img id="classesImage" src="../assets/classes.png" alt="Classes Image">
                <a id="classesText">Classes</a>
            </div>
            <div class="options" onclick="location.href='/teachersleaderboard'">
                <img id="scoreboardImage" src="../assets/leaderboard.png" alt="ScoreBoard Image">
                <a id="scoreboardText">Leaderboard</a>
            </div>

            <div class="options" onclick="location.href='/viewstats'">
                <img id="statisticsImage" src="../assets/statistics.png" alt="ScoreBoard Image">
                <a id="statisticsText">Statistics</a>
            </div>
            <div class="options" onclick="location.href='/AddQuestion'">
                <img id="questionImage" src="../assets/question2.png" alt="Question Image">
                <a id="questionsText">Add Questions</a>
            </div>
                        <div class="options" onclick="location.href='/DelQuestion'">
                <img id="deleteImage" src="../assets/delete.png" alt="Question Image">
                <a id="questionsText">Delete Questions</a>
            </div>
        </div>
    </div>
    <router-view/>
</template>

<script>
import { getAuth, onAuthStateChanged } from "@firebase/auth";
export default {
    data: () => {
        return {
            user: false,
        }
    }, 
    mounted(){
        const auth = getAuth(auth);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        });

    }
}
</script>

<style scoped>
#scoreboardText {
    position: relative;
    left: 72px;
    top: 25px;
}

#scoreboardImage {
    position: relative;
    width: 30%;
    right: 140px;
}
#questionImage{
    position: relative;
    width: 20%;
    right: 135px
}
#questionsText{
    position: relative;
    left: 70px;
    top: 25px;
}
#deleteImage{
    position: relative;
    width: 20%;
    right: 170px

}

#homeText {
    position: relative;
    left: 70px;
    top: 26px;
}

#homeImage {
    position: relative;
    width:23%;
    bottom: 3px;
    right:140px;
}
#announcementText {
    position: relative;
    top: 17px;
    left: 70px;
}

#announcementImage {
    position: relative;
    width: 30%;
    right: 155px;
}
#classesText {
    position: relative;
    top: 13px;
    left: 70px;
}
 
#classesImage {
    width: 25%;
    position: relative;
    right: 118px;

}

#statisticsImage {
    width: 13%;
    position: relative;
    right:125px;
}

#statisticsText {
    position: relative;
    top:12px;
    left:72px;
}

#photo {
    float: left;
}
#personal {
    cursor:pointer;
}
#overview {
    color: black;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: left;
    line-height: 1.5;
}

#details {
    position: relative;
    left: 10px;
    top: 25px;
}

#personal {
    cursor:pointer;
}
#main {
    position: fixed;
    margin-top:80px;
    margin-left:20px;
    background-color: #bfd6d8;
    box-shadow: 0px 2px 2px 0px;
    border-radius: 5px;
    padding: 0px 10px 40px 10px;
}

#menu {
    float: left;
    background-color: #ececec;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    max-height: 430px;
    width: 250px;
    margin-top:10px;
}

.options {
    border:1px solid grey;
    border-radius: 5px;
    padding: 10px 0px 5px 0px;
}

.options:hover {
    cursor: pointer;
    background-color: #fb8332;
}

a {
    color: #00bcd4;
    font-size: 19px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    float: left;
}

a:visited, a:link, a:active {
    text-decoration: none;
}
</style>