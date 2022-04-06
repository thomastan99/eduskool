<template>
<LeftPanelTeachers/>
<BlueBanner/>
  <!-- <AddQues/> -->
  <br><br><br>
  <DeleteQues/>
</template>

<script>
// import AddQues from '../components/AddQues.vue'
import LeftPanelTeachers from '../components/LeftPanelTeachers.vue'
import BlueBanner from '../components/BlueBanner.vue'
import DeleteQues from '../components/DeleteQues.vue'
export default {
    name: "Add Question",
    components:{
        // AddQues,
        LeftPanelTeachers,
        BlueBanner,
        DeleteQues
    }

}
</script>

<style>

</style>