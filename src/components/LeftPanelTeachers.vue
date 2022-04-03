<template>
    <div id="main">
        <div id="personal">
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
                <a id="classesText">Classes & Students</a>
            </div>
            <div class="options" onclick="location.href='/teachersleaderboard'">
                <img id="scoreboardImage" src="../assets/leaderboard.png" alt="ScoreBoard Image">
                <a id="scoreboardText">Leaderboard</a>
            </div>

            <div class="options" onclick="location.href='/viewstats'">
                <img id="statisticsImage" src="../assets/statistics.png" alt="ScoreBoard Image">
                <a id="statisticsText">Statistics</a>
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
    left: 71px;
    top: 25px;
}

#scoreboardImage {
    position: relative;
    width: 30%;
    right: 135px;
}

#homeText {
    position: relative;
    left: 70px;
    top: 26px;
}

#homeImage {
    position: relative;
    width:23%;
    height: 5%;
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
    top:20px;
    left:70px;
}
 
#classesImage {
    width: 30%;
    position: relative;
    right: 168px;

}

#statisticsImage {
    width: 15%;
    position: relative;
    right:125px;
}

#statisticsText {
    position: relative;
    top:12px;
    left:71px;
}

#photo {
    margin-top:8%;
    float: left;
    display: inline-block;
}
#personal {
    cursor:pointer;
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
    width:100%;
    position: relative;
    left: 10px;
    top: 25px;
}

#personal {
    cursor:pointer;
}
#main {
    position: fixed;
    margin-top:35px;
    margin-left:20px;
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
    background-color: #d6e0e2;
}

a {
    color: #6cc1cc;
    font-size: 19px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    float: left;
}

a:visited, a:link, a:active {
    text-decoration: none;
}
</style>