<template lang="html">
<div class="">
  <plugin-header></plugin-header>
  <plugin-nav></plugin-nav>
  <p>This is Welcome Page!</p>
  <router-view/>
</div>
</template>

<script>
import PluginHeader from '../components/PluginHeader'
import PluginNav from '../components/PluginNav'

export default {
  components: {
    PluginHeader,
    PluginNav
  }
}
</script>

<style lang="css" scoped>
</style>
