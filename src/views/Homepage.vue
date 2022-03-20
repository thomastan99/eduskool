<template>
<BlueBanner/>
<LeftPanel/>
<Topics/>
</template>

<script>
import LeftPanel from '../components/LeftPanel.vue'
import BlueBanner from '../components/BlueBanner.vue'
import Topics from '../components/Topics.vue'

export default {
  name: 'App',
  components: {
    LeftPanel,
    BlueBanner,
    Topics,
  }
}
</script>

<style>

</style>
