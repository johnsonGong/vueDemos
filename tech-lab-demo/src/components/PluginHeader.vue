<template lang="html">
<div class="comm-header">
  <p>Common Header!</p>
  <p>Time is {{time}}</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      time: new Date()
    }
  }
}
</script>

<style lang="css" scoped>
.comm-header {
  background-color: yellow;
  margin-bottom: 10px;
}
</style>
