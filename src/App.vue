<template>
 <div class="container">
  <div class="card">
    <h1>Vue Composition API</h1>
    <small>data, computed, methods, watch </small>
    <div class="form-control">
      <input type="text" v-model="ferstName">
       <!-- <input type="text" ref="textInput" > -->
    </div>

    <button class="btn" @click="change">Изменить</button>
  </div>

  <Framvorkinfo 
  :name="name"
  :version="version"
  @change-version="changeVersion"
  class="test-fpom-app"
  >
  <template #footer>
    <p>Все права защищены</p>
  </template>
</Framvorkinfo>


 </div>
 
</template>

<script>
import { ref, reactive, toRefs, isRef, isReactive, computed, watch, provide } from 'vue'
import Framvorkinfo from './Framvorkinfo.vue';
export default {

 
setup() {
const name = ref( 'VueJS')
const version = ref( 100)
const textInput = ref(null)
const ferstName = ref('')



const framework = reactive({
  name: 'VueJS',
  version: 3
})

//const doubleVersion = computed(() => version.value * 2)

// watch ([doubleVersion, name], (newValues, oldValues) => {
//   console.log('new version', newValues[0]),
//   console.log('new name', newValues[1]),
//   console.log('old version', oldValues[0]),
//   console.log('old name', oldValues[1])

// })

function changeInfo() {

name.value = 'Vue JS !'
version.value = 150
//console.log(textInput.value.value)

 //framework.name = 'Vue JS !'
 //framework.version = 42
 }

function changeVersion(number) {

  version.value = number

}

provide('name', name)
provide('version', version)

return {
change: changeInfo,
ferstName,
changeVersion
}
},
components: { Framvorkinfo },

}
 
</script>

<style scoped>

</style>