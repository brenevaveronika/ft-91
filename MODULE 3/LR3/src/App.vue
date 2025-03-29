<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import {computed, reactive, ref} from 'vue';

const user = reactive({
  firstName: '',
  lastName: '',
  sex: '',
  password: '',
  passwordCheck: ''
});

const submitted = ref(false);

const showPassword = ref(false);


const passwordMismatch = computed(() => {
  return user.password !== user.passwordCheck && user.passwordCheck !== '';
});

const logFormData = () => {
  console.log('Текущие данные формы:', {
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.sex,
    password: user.password,
    passwordCheck: user.passwordCheck
  });
};

const handleSubmit = () => {
  if (passwordMismatch.value) {
    alert('Пожалуйста, убедитесь, что пароли совпадают');
    return;
  }
  submitted.value = true;
};

</script>

<template>
  <body>
  <form @submit.prevent="handleSubmit">
    <input v-model="user.firstName" type="text" name="firstName" id="firstName" placeholder="Имя" required/>
    <input v-model="user.lastName" type="text" name="lastName" id="lastName" placeholder="Фамилия" required/>

    <fieldset>
      <legend>Пол:</legend>
      <div>
        <input v-model="user.sex" type="radio" id="female" name="sex" value="female" checked/>
        <label for="female">Женский</label>
      </div>
      <div>
        <input v-model="user.sex" type="radio" id="male" name="sex" value="male"/>
        <label for="male">Мужской</label>
      </div>
    </fieldset>

    <div class="form-group">
      <label for="password">Пароль:</label>
      <div class="password-input-container">
        <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="user.password"
            required
        >
        <button
            type="button"
            class="show-password-btn"
            @mousedown="showPassword = true"
            @mouseup="showPassword = false"
        >
          Показать
        </button>
      </div>
    </div>
    <div class="form-group">
      <label for="passwordCheck">Подтверждение пароля:</label>
      <div class="password-input-container">
        <input
            :type="showPassword ? 'text' : 'password'"
            id="passwordCheck"
            v-model="user.passwordCheck"
            required
        >
        <button
            type="button"
            class="show-password-btn"
            @mousedown="showPassword = true"
            @mouseup="showPassword = false"
        >
          Показать
        </button>
      </div>
    </div>
    <button
        type="submit"
        class="submit-btn"
        :disabled="passwordMismatch"
        @click="logFormData"
    >
      Зарегистрироваться
    </button>
  </form>

  <p>Пользователь: {{ user.firstName }} {{ user.lastName }}. {{ user.sex === 'male' ? 'Мужского' : 'Женского' }}
    пола.</p></body>

</template>

<style scoped>

body {
  font-family: Inter;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10% 40%;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

input {
  padding: 10px;
}

form > button {
  padding: 10px;
  background-color: lightsteelblue;
}

.password-input-container {
  display: flex;
  gap: 5px;
}

.show-password-btn {
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.show-password-btn:hover {
  background-color: #e0e0e0;
}
</style>