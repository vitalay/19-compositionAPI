<template>
    <div class="card">
        <h2>Переиспользование</h2>
        <button class="btn-primary">Показать сообщение</button>
        <button class="btn">перейти на главную</button>
    </div>
</template>

<script>

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