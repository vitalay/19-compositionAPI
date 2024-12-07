<template>
 <div class="container">
  <div class="card">
    <h1>Vue Composition API</h1>
    <small>data, computed, methods, watch </small>
    <hr>
    <p>Название: <strong>{{ framework.name }}</strong></p>
    <p>Версия: <strong>{{ framework.version }}</strong> </p>
    <button class="btn" @click="change">Изменить</button>
  </div>
 </div>
 
</template>

<script>
import { ref, reactive } from 'vue'

export default {
setup() {
// const name = ref( 'VueJS')
// const version = ref( 3)

const framework = reactive({
  name: 'VueJS',
  version: 3})

function changeInfo() {
//   name.value = 'Vue JS !'
//   version.value = 42

 framework.name = 'Vue JS !'
 framework.version = 42
 }

return {
  // name,
  // version,
  // name: framework.value.name,
  // version: framework.value.version,
  change: changeInfo,
  framework: framework 
}
}
}

</script>

<style scoped>

</style>