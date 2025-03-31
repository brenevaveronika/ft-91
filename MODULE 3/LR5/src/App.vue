<script setup>
import { ref } from 'vue';

const number = ref('');
const category = ref('math');
const fact = ref('Здесь будут непосредственно факты :)');
const isLoading = ref(false);

const fetchFact = async () => {
  if (!number.value) {
    fact.value = 'Пожалуйста, введите число';
    return;
  }

  try {
    isLoading.value = true;
    const response = await fetch(`http://numbersapi.com/${number.value}/${category.value}?json`);
    const data = await response.json();

    if (data.found) {
      fact.value = data.text;
    } else {
      fact.value = 'Факт для этого числа не найден';
    }
  } catch (error) {
    fact.value = 'Произошла ошибка при получении факта';
    console.error('Error fetching fact:', error);
  } finally {
    isLoading.value = false;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  fetchFact();
};

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    fetchFact();
  }
};
</script>

<template>
  <main>
    <h1>Это факты!</h1>
    <form @submit="handleSubmit" @keyup.enter="handleKeyPress">
      <div class="form-group">
        <input type="number" id="number" placeholder="Введите число:" v-model="number"></input>
      </div>
      <div class="form-group">
        <label for="category"></label>
        <select name="category" id="category" v-model="category">
          <option selected value="math"> math</option>
          <option value="year"> year</option>
          <option value="trivia"> trivia</option>
        </select>
      </div>
      <button type="submit" class="submitBtn" :disabled="isLoading">{{ isLoading ? 'Загрузка...' : 'Поиск факта' }}</button>
    </form>
    <div class="fact">
      {{ fact }}
    </div>
  </main>
</template>

<style scoped>
main {
  font-family: DM Sans, Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  width: 100%;
  text-align: center;
}

form {
  width: 500px;
}
.form-group {
  width: 100%;

}

.form-group input {
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.form-group select {
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.submitBtn {
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: deeppink;
  color: white;
  transition: 0.3s;
}

.submitBtn:hover {
  background-color: lightseagreen;
}

.fact {
  margin-top: 30px;
  background-color: gainsboro;
  border-radius: 5px;
  padding: 10px;
  width: 500px;
  box-sizing: border-box;
}
</style>
