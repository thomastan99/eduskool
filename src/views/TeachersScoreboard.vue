<template>
<BlueBanner/>
<LeftPanelTeachers/>
<StudentList/>
</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanelTeachers from '@/components/LeftPanelTeachers.vue'
import StudentList from '@/components/StudentList.vue'

export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanelTeachers,
    StudentList
  }
}
</script>