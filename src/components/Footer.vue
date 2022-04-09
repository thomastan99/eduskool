<template>
    <div id="footer">
        <div id="about"> 
            <h1 id="aboutTitle"> ABOUT </h1>
            EDU'skool is a web-based platform for tuition centres students to engage <br>
            in supplementary self-directed learning in their current
            cirriculum level. <br><br>
            
            EDU'skool is a centralised platform that both registered teachers and students can 
            use for their own purposes. 
        </div>
         <div id="contact"> 
            <h1 id="contactTitle"> CONTACT US</h1>
            Email: eduskool@gmail.com <br><br>
            <img id="ig" src="@/assets/instagram.png">
            <img id="mail" src="@/assets/email.png">
        </div>
         <div id="visit"> 
            <h1 id="visitTitle"> VISIT OUR CENTRES </h1>
            North: 12 Yishun Road S123456 #01-10 <br>
            South: 12 Marina Road S123457 #01-20 <br>
            East: 12 Tampines Road S123458 #01-30 <br>
            West: 12 Clementi Road S123458 #01-40
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#mail {
    width: 4%;
    position: relative;
    top: 1px;
    left: 10px;
}
#ig {
    width: 3%;
    position:relative;

}
#visitTitle {
    color: black;
}
#visit {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 11px;
    text-align: left;
    margin-left: 20px;
    color: white;
    position: relative;
    bottom: 222px;
    margin-left: 1150px;

}
#contact {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 11px;
    color: white;
    position: relative;
    text-align: left;
    bottom: 107px;
    margin-left: 700px;
}
#aboutTitle {
    color: black;
}
#contactTitle {
    color: black;
}
#about {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 11px;
    text-align: left;
    margin-left: 20px;
    color: white;
    position: relative;
    /* top: 10px; */
}
#footer {
    box-shadow: 5px 5px 5px 5px;
    position: relative;
    left: 0;
    bottom: 0;
    margin-top: 700px;
    width:100%;
    max-height: 130px;
    background-color: #58c8d6;
}
</style>