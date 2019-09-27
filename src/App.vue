<template>
<div class="wrapper">
  <div id = "ItemDiv" class="box">
    <Items></Items>
  </div>
  <div id ="InfoDiv" class="box">
    <Info></Info>
  </div>
  </div>
</template>
<script>
import Items from './components/Items.vue'
import Info from './components/Information.vue'

export default {
  name: 'app',
  components: {
    Items,
    Info
  }
}
</script>
