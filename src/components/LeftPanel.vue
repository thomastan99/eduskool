<template>
    <div id="main">
        <div id="personal">
            <div id="photo"><img src="../assets/photo.png" alt="Profile Pic"></div>
            <div id="overview">
                <h4 id="details">James Ng Chung Tak
                <br>Primary 5 Student
                <br>Ximin Primary School</h4>
            </div>
        </div>
        <div id="menu">
            <div class="options">
                <img id="announcementImage" src="../assets/announcement.png" alt="Announcement Image">
                <a id="announcementText" href="/">Announcements</a>
            </div>

            <div class="options">
                <img id="topicsImage" src="../assets/topics.png" alt="Topics Image">
                <a id="topicsText" href="/">Topics</a>
            </div>

            <div class="options">
                <img id="homeworkImage" src="../assets/homework.png" alt="Homework Image">
                <a id="homeworkText" href="/">Homework</a>
                <a href="/"></a>
            </div>

            <div class="options">
                <img id="achievementsImage" src="../assets/achievements.png" alt="Achievements Image">
                <a id="achievementsText" href="/">Achievements</a>
                <a href="/"></a>
            </div>

            <div class="options">
                <img id="leaderboardImage" src="../assets/leaderboard.png" alt="Leaderboard Image">
                <a id="leaderboardText" href="/LeaderboardMath">Leaderboard</a>

            </div>

            <div class="options">
                <img id="commentsImage" src="../assets/comments.png" alt="Comments Image">
                <a id="commentsText" href="/">Comments</a>
                <a href="/"></a>
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
    right: 85px;
}

#leaderboardText {
    position: relative;
    left: 75px;
    top: 20px;
}
#leaderboardImage {
    height:20%;
    width:28%;
    position: relative;
    top: 5px;
    right: 114px;
}
#achievementsText {
    position: relative;
    left: 75px;
    top: 18px;
}
#achievementsImage {
    height:20%;
    width:23%;
    position: relative;
    top: 7px;
    right: 121px;
}
#homeworkText {
    position: relative;
    left: 75px;
    top: 15px;
}
#homeworkImage {
    height:20%;
    width:20%;
    position: relative;
    top:4px;
    right: 90px;
}
#topicsText {
    position: relative;
    left: 75px;
    top: 15px;
}
#topicsImage {
    height:20%;
    width:20%;
    position: relative;
    top:1px;
    right: 45px;
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
    left: 75px;
    top: 12px;
} 
#classesImage {
    height:50%;
    width:20%;
    position: relative;
    right: 55px;
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
    float: left;
    margin-bottom: 20px;
    position: relative;
    top: 50px;
    left: 15px;
}

#main {
    max-width: 270px;
}

#menu {
    float: left;
    background-color: #ececec;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 525px;
    width: 250px;
    position: relative;
    top:60px;
    left:20px;
}

.options {
    border:1px inset #c9dde0;
    padding: 10px 20px 20px 10px;
}

.options:hover {
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