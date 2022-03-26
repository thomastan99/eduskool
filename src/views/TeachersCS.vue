<template>
<BlueBanner/>
<LeftPanel/>
<div id="root">
  <div id="cs"><h1 style="font-size: 40px">Classes & Students</h1></div>
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
</div>


</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanel from '@/components/LeftPanel.vue'
import Accordion from '@/components/Accordion.vue'

export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanel,
    Accordion
  }
}
</script>

<style scoped>
#accordions {
  margin-top: 25px;
  padding-left: 20px;
  width: 900px;
  background-color: #ececec;
  border: 1px solid grey;
  overflow-y: scroll;
  max-height: 510px;
  float: left;
}

#cs {
    float: left;
}

#root {
  float: left;
  position: absolute;
  left: 325px;
  top: 90px;
  display: inline-block;
}
</style>