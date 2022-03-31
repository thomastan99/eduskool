<template>
    <div id="main">
        <div id="personal">
            <div id="photo"><img src="../assets/photo.png" alt="Profile Pic"></div>
            <div id="overview">
                <h4 id="details">Shakeshack Treeparty
                <br>Teacher
                <br>Ximin Primary School</h4>
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

            <div class="options" onclick="location.href='/teachersscoreboard'">
                <img id="scoreboardImage" src="../assets/leaderboard.png" alt="ScoreBoard Image">
                <a id="scoreboardText">ScoreBoard</a>
            </div>

            <div class="options" onclick="location.href='/viewstats'">
                <img id="statisticsImage" src="../assets/leaderboard.png" alt="ScoreBoard Image">
                <a id="statisticsText">Statistics</a>
            </div>

        </div>
    </div>
    <router-view/>
</template>

<script>

export default {
}
</script>

<style scoped>
#commentsText {
    position: relative;
    left: 75px;
    top: 15px;
}
#commentsImage {
    height:20%;
    width:20%;
    position: relative;
    top:7px;
    right: 120px;
}

#scoreboardText {
    position: relative;
    left: 75px;
    top: 20px;
}
#scoreboardImage {
    height:20%;
    width:28%;
    position: relative;
    top: 5px;
    right: 125px;
}

#homeText {
    position: relative;
    left: 75px;
    top: 24px;
}

#homeImage {
    height:20%;
    width:20%;
    position: relative;
    top:4px;
    right: 125px;
}

#announcementText {
    position: relative;
    left: 75px;
    top: 20px;
}
#announcementImage {
    height:50%;
    width:30%;
    position: relative;
    top:6px;
    right: 145px;
}
#classesText {
    position: relative;
    top: -32px;
    left: 50px;
}
 
#classesImage {
    height:50%;
    width:25%;
    position: relative;
    right: 90px;
    top:3px;
}
#photo {
    float: left;
    display: inline-block;
    vertical-align: top;
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
    margin-top: 0;
    margin-bottom: 0;
    position: relative;
    left: 10px;
    top: 5px;
}

#personal {
    margin-top:10px;
    margin-bottom:120px;
}

#main {
    position: fixed;
    margin-top:50px;
    margin-left:20px;
}

#menu {
    float: left;
    background-color: #ececec;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 356px;
    width: 250px;
}

.options {
    border:1px solid black;
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

a:visited, a:link, a:active {
    text-decoration: none;
}
</style>