<template>
  <div class="numbers-manager">
    <ul class="numbers-list">
      <li
          v-for="(number, index) in numbers"
          :key="index"
          class="number-item"
          @click="divideNumber(index)"
      >
        {{ formatNumber(number) }}
      </li>
    </ul>
    <button class="add-button" @click="addNumber">
      Добавить число (1/2 последнего)
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const numbers = ref([100, 500, 250]);

// форматирует число до одного знака после запятой
const formatNumber = (num) => {
  return num % 1 === 0 ? num : num.toFixed(1);
}

// делит число на два
const divideNumber = (index) => {
  const newValue = numbers.value[index] / 2;
  if (newValue < 1) {
    numbers.value.splice(index, 1);
  } else {
    numbers.value[index] = newValue;
  }
}

// добавляет половину последнего числа в списке (или случайное число, если список пуст)
const addNumber = () => {
  if (numbers.value.length > 0) {
    const lastNumber = numbers.value[numbers.value.length - 1];
    numbers.value.push(lastNumber / 2);
  } else {
    numbers.value.push(Math.floor(Math.random() * 100));
  }
}
</script>

<style scoped>
.numbers-manager {
  max-width: 300px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

.numbers-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.number-item {
  padding: 10px 15px;
  margin: 5px 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
}

.number-item:hover {
  background-color: #e0e0e0;
}

.add-button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #3aa876;
}
</style>