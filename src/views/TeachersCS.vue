<template>
<BlueBanner/>
<LeftPanel/>
<CSHeader/>
<div id="accordions">
  <Accordion class="level1" title="English 1">
    <Accordion class="level2" title="Tay Chung Tak">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Nasry">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Chase Ng">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
  </Accordion>
  <Accordion class="level1" title="Math 3">
    <Accordion class="level2" title="Tay Chung Tak">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Nasry">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Chase Ng">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
  </Accordion>
  <Accordion class="level1" title="Science 2">
    <Accordion class="level2" title="Tay Chung Tak">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Nasry">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Chase Ng">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
  </Accordion>
</div>
<RightPanel/>

</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanel from '@/components/LeftPanel.vue'
import CSHeader from '@/components/CSHeader.vue'
import Accordion from '@/components/Accordion.vue'
import RightPanel from '@/components/RightPanel.vue'

export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanel,
    CSHeader,
    Accordion,
    RightPanel
  }
}
</script>

<style scoped>
#accordions {
  margin-left: 60px;
  float: left;
  width: 1000px;
  background-color: #ececec;
  border: solid black;
}
</style>