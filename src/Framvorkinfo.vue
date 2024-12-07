<template>
    <div class="card">
        <p>Название: <strong>{{ name }}</strong></p>
        <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong> </p>
        <button class="btn" @click="changeToThree">Изменить на 3 Версия</button>
  </div>
</template>

<script>
 import { computed } from 'vue'

export default {

    props: [
        'name', 
        'version'
    ],
    emits: ['change-version'],
    setup(props, context) {

        function change() {
           context.emit('change-version', 3)    
        }
        return {
           changeToThree: change,
           doubleVersion: computed(() => props.version * 2)
 
        }
         
    }

}
</script>