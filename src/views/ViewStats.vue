<template>
    <BlueBanner/>
    <LeftPanelTeachers/>
    <Charts/>
</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanelTeachers from '@/components/LeftPanelTeachers.vue'
import Charts from '@/components/Charts.vue'

export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanelTeachers,
    Charts
  }
}


</script>

<style scoped>

</style>