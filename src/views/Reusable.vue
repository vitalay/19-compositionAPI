<template>
    <app-alert 
    title="Работаем с Composition API"
     type="primary"
      v-if="alert"
      @close="close"
      ></app-alert>
  
    <div class="card">
      <h2>Переиспользование</h2>
      <button class="btn-primary" @click="toggle">{{ alert ? 'скрыть' : 'показать' }} сообщение</button>
      <button class="btn" @click="navigate">перейти на главную</button>
    </div>
  </template>
  

  <script>
 
  import { useRouter, useRoute } from 'vue-router';
  import AppAlert from './AppAlert.vue';
import { useAlert } from '@/use/alert';
  
  export default {
    setup() {
        useAlert();
      //const { alert, toggle, close } = useAlert();
      
      const router = useRouter();
      const route = useRoute();
  
      const navigate = () => {
        router.push('/');
      };
  

      return {
       
        navigate,
        ...useAlert(true),
       
      };
    },
    components: { AppAlert },
  };
  </script>
  

<style scoped>
.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 20px auto;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

.btn-primary {
  width: 100%;
  height: 40px;
  margin: 10px;
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #df8a13;
}

.btn {
  width: 100%;
  height: 40px;
  margin: 10px;
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #df8a13;
}
</style>
