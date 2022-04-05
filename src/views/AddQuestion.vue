<template>
<LeftPanel/>
<BlueBanner/>
  <AddQues/>
</template>

<script>
import AddQues from '../components/AddQues.vue'
import LeftPanel from '../components/LeftPanel.vue'
import BlueBanner from '../components/BlueBanner.vue'
export default {
    name: "Add Question",
    components:{
        AddQues,
        LeftPanel,
        BlueBanner
    }

}
</script>

<style>

</style>