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
                <img id="statisticsImage" src="../assets/statistics.png" alt="ScoreBoard Image">
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
#scoreboardText {
    position: relative;
    left: 70px;
    top: 20px;
}

#scoreboardImage {
    height:100%;
    position: relative;
    top: 5px;
    right: 110px;
}

#homeText {
    position: relative;
    left: 10px;
    top: 24px;
}

#homeImage {
    height: 120%;
    float: left;
    margin-left: 20px;
}

#announcementText {
    margin-top: -35px;
    margin-left: 50px;
}

#announcementImage {
    height:100%;
    float: left;
    margin-top: 3px;
    
}
#classesText {
    margin-top: -27px;
    margin-left: 23px;
}
 
#classesImage {
    height:60%;
    float: left;
    margin-left: -10px;
    margin-top: 15px;
}

#statisticsImage {
    float: left;
    height: 60%;
    margin-left: 30px;
    margin-top: 15px;
}

#statisticsText {
    margin-left: 15px;
    margin-top: 22px;
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
    max-height: 356px;
    width: 250px;
    overflow-y: scroll;
}

.options {
    border: 1px solid grey;
    padding: 10px 20px 20px 10px;
    height: 50px;
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