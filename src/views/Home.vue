<template>

<app-alert 
    title="Работаем с Composition API"
     type="danger"
      v-if="alert"
      @close="close"
      ></app-alert>

    <div class="card">
      <h1>Vue Composition API</h1>
      <small>data, computed, methods, watch </small>
      <div class="form-control">
        <input type="text" v-model="ferstName">
         <!-- <input type="text" ref="textInput" > -->
      </div>
  
      <button class="btn" @click="change">Изменить</button>
      <button class="btn danger" @click="toggle">alert</button>
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
  
   
</template>

<script>
import Framvorkinfo from '../Framvorkinfo.vue';
import AppAlert from './AppAlert.vue';
import {
   ref,
  reactive,
   toRefs,
    isRef,
     isReactive,
      computed,
       watch,
        provide,
        onBeforeMount,
         onMounted,
          onBeforeUpdate,
           onUpdated,
            onBeforeUnmount,
             onUnmounted,
       } from 'vue'



export default {

 
setup() {
const name = ref( 'VueJS')
const version = ref( 100)
const textInput = ref(null)
const ferstName = ref('')
const alert = ref(false);

const toggle = () => {
  alert.value = !alert.value;
};

const close = () => {
  alert.value = false;
}

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
changeVersion,
alert,
toggle,
close
}
},
components: { Framvorkinfo, AppAlert },

}
 
</script>

<style scoped>

/* Общие стили для карточки */
.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 20px auto;
}

/* Заголовок */
.card h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

/* Подзаголовок */
.card small {
  color: #888;
  font-size: 14px;
  margin-bottom: 20px;
  display: block;
}

/* Поле ввода текста */
.form-control input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
}

/* Кнопка */
.btn {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #45a049;
}

/* Компонент Framvorkinfo */
.test-fpom-app {
  margin-top: 40px;
}

/* Футер */
#footer p {
  text-align: center;
  color: #999;
  font-size: 12px;
  margin-top: 20px;
}

</style>