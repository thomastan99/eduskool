<template>
<BlueBanner/>
<LeftPanelTeachers/>
    <h1 style="font-size: 40px" id="title"> Delete Questions from Question Database </h1>
  <!-- <AddQues/> -->
  <br><br><br>
  <DeleteQues/>
  <Footer/>
</template>

<script>
// import AddQues from '../components/AddQues.vue'
import Footer from "@/components/Footer.vue"
import LeftPanelTeachers from '../components/LeftPanelTeachers.vue'
import BlueBanner from '../components/BlueBanner.vue'
import DeleteQues from '../components/DeleteQues.vue'
export default {
    name: "Add Question",
    components:{
        // AddQues,
        LeftPanelTeachers,
        BlueBanner,
        DeleteQues,
        Footer
    }

}
</script>

<style scoped>
#title {
  margin-top: 90px;
  margin-left: 230px;
}
</style>