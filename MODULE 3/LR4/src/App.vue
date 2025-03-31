<script setup>
import { reactive, ref, computed } from 'vue';

const history = reactive([]);
const title = ref('');
const amount = ref(0);

const incomeBalance = computed(() => {
  return history.reduce((sum, item) => {
    return item.amount > 0 ? sum + item.amount : sum;
  }, 0);
});
const outcomeBalance = computed(() => {
  return history.reduce((sum, item) => {
    return item.amount < 0 ? sum + item.amount : sum;
  }, 0);
});
const totalBalance = computed(() => {
  return incomeBalance.value + outcomeBalance.value;
});

const addItem = () => {
  const newItem = {
    id: Date.now(),
    text: title.value,
    amount: amount.value
  };

  history.push(newItem);

  title.value = '';
  amount.value = 0;
};
</script>

<template>

  <body>
    <h1> Учет расходов </h1>
    <div v-if="history.length == 0">
      <p>Вы не совершили ни одной операции.</p>
    </div>
    <div v-else>
      <p>Баланс: {{ totalBalance }}</p>
      <p>Доходы: {{ incomeBalance }}</p>
      <p>Расходы: {{ outcomeBalance }}</p>
    </div>
    <div class="operations-box">
      <ul class="operations-list">
        <li class="list-item" v-for="item in history" :key="item.id"
          :class="{ 'income': item.amount > 0, 'expense': item.amount < 0 }">
          <span class="operation-title">{{ item.text }}</span>
          <span class="operation-amount">{{ item.amount }}</span>
        </li>
      </ul>
    </div>
    <br>
    <form @submit.prevent="addItem" class="add-form">
      <div class="form-group">
        <label for="title">Название операции:</label>
        <input type="text" id="title" v-model.trim="title" required placeholder="Например: Зарплата">
      </div>

      <div class="form-group">
        <label for="amount">Сумма (₽):</label>
        <input type="number" id="amount" v-model.number="amount" required placeholder="Например: 5000 или -2000">
      </div>

      <button type="submit" class="add-btn">Добавить операцию</button>
    </form>
  </body>
</template>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
}

.operations-box {
  max-width: 500px;
}

.operations-list {
  list-style: none;
  padding: 0;

}

.list-item {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;

}

.operation-title {
  font-weight: bold;
}

.add-form {
  max-width: 500px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.add-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.5s;
}

.add-btn:hover {
  background-color: #27ae60;
}
</style>