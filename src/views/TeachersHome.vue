<template>
<BlueBanner/>
<LeftPanelTeachers/>
<ClassList/>
</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanelTeachers from '@/components/LeftPanelTeachers.vue'
import ClassList from '@/components/ClassList.vue'

export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanelTeachers,
    ClassList
  }
}
</script>