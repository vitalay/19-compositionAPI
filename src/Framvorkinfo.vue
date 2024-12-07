<template>
    <div class="card">
        <p>Название: <strong>{{ name }}</strong></p>
        <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong> </p>
        <button class="btn" @click="changeToThree">Изменить на 3 Версия</button>
  </div>
</template>

<script>
 import { computed, inject } from 'vue'

export default {

    emits: ['change-version'],
    setup(props, context) {



        function change() {
           context.emit('change-version', 3)    
        }

  
    const version = inject('version')

        return {
            name: inject('name'),
            version: version,
           changeToThree: change,
           doubleVersion: computed(() => version.value * 2)
 
        }
         
    }

}
</script>

<style scoped>

card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 20px auto;
}

.card p {
  margin: 0 0 10px;
}

.card strong {
  color: #333;
}

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


</style>