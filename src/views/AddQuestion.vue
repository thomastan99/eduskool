<template>
<LeftPanelTeachers/>
<BlueBanner/>
  <AddQues/>
  <br><br><br>

</template>

<script>
import AddQues from '../components/AddQues.vue'
import LeftPanelTeachers from '../components/LeftPanelTeachers.vue'
import BlueBanner from '../components/BlueBanner.vue'

export default {
    name: "Add Question",
    components:{
        AddQues,
        LeftPanelTeachers,
        BlueBanner,

    }

}
</script>

<style>

</style>