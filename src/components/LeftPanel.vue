<template>
    <div id="main">
        <div id="personal">
            <div id="photo"><img src="../assets/photo.png" alt="Profile Pic"></div>
            <div id="overview"><h4 id="details">Chase Cheng Zhi Peng
                <br>Teacher
                <br>Ximin Primary School</h4>
            </div>
        </div>
        <div id="menu">
            <div class="options"><a href="/">Announcements</a></div>
            <div class="options"><router-link to='/teacherscs'>Classes</router-link></div>
            <div class="options"><router-link to='/'>Home</router-link></div>
            <div class="options"><a href="/">Homework</a></div>
            <div class="options"><a href="/">My Account</a></div>
            <div class="options"><router-link to='/teachersscoreboard'>Scoreboard</router-link></div>
        </div>
    </div>
    <router-view/>
</template>

<script>

export default {
}
</script>

<style scoped>
#photo {
    float: left;
    display: inline-block;
    vertical-align: top;
}

#overview {
    float: left;
    display: inline-block;
    color: #00bcd4;
    text-align: left;
    line-height: 1.5;
}

#details {
    margin-top: 0;
    margin-bottom: 0;
}

#personal {
    float: left;
    margin-bottom: 20px;
}

#main {
    max-width: 270px;
}

#menu {
    float: left;
    background-color: #ececec;
    height: 740px;
}

.options {
    padding: 20px 60px 60px 10px;
}

.options:hover {
    background-color: #c4c4c4;
}

a {
    color: #00bcd4;
    font-size: 24px;
    font-weight: bold;
    float: left;
}

a:visited, a:link, a:active {
    text-decoration: none;
}
</style>