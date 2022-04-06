<template>
<BlueBanner/>
<LeftPanelTeachers/>
<div id="add">
  <h1 style="font-size: 40px">Add Questions to Questions Database</h1>
  <AddQues/>
</div>
<br><br><br>
<Footer/>
</template>

<script>
import AddQues from '../components/AddQues.vue'
import LeftPanelTeachers from '../components/LeftPanelTeachers.vue'
import BlueBanner from '../components/BlueBanner.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: "Add Question",
    components:{
        AddQues,
        LeftPanelTeachers,
        BlueBanner,
        Footer,
    }
}
</script>

<style scoped>
#add {
  display: inline-block;
  margin-top: 70px;
  margin-left: 230px;
}

</style>