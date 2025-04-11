<template>
  <div class="emoji-mixer">
    <div v-if="showResult" class="mixer-result">
      <div class="emoji-pair">
        <div class="emoji-container">
          <h4>Первый эмодзи</h4>
          <Emoji :emoji="firstEmoji" class="source-emoji" />
          <p class="emoji-name">{{ firstEmoji.name }}</p>
        </div>

        <div class="mix-plus">+</div>

        <div class="emoji-container">
          <h4>Второй эмодзи</h4>
          <Emoji :emoji="secondEmoji" class="source-emoji" />
          <p class="emoji-name">{{ secondEmoji.name }}</p>
        </div>

        <div class="mix-equals">=</div>

        <div class="emoji-container">
          <h4>Результат</h4>
          <img
              :src="kitchenEmoji"
              :alt="`Mix of ${firstEmoji.name} and ${secondEmoji.name}`"
              class="mixed-emoji"
              @load="handleImageLoad"
              @error="handleImageError"
          />
          <p v-if="imageError" class="error-message">Не удалось загрузить микс</p>
        </div>
      </div>
    </div>

    <div v-else class="placeholder">
      <p>Выберите два эмодзи для создания микса</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Emoji from './Emoji.vue'

const props = defineProps({
  firstEmoji: {
    type: Object,
    default: null
  },
  secondEmoji: {
    type: Object,
    default: null
  }
})

const imageError = ref(false)
const showResult = computed(() => props.firstEmoji && props.secondEmoji)

const kitchenEmoji = computed(() => {
  if (!showResult.value) return null

  imageError.value = false
  const unicodeFirst = props.firstEmoji.unicode[0].replace('U+', '').toLowerCase()
  const unicodeSecond = props.secondEmoji.unicode[0].replace('U+', '').toLowerCase()
  return `https://emk.vercel.app/s/${unicodeFirst}_${unicodeSecond}?size=96&random=${Math.random()}`
})

const handleImageLoad = () => {
  imageError.value = false
}

const handleImageError = () => {
  imageError.value = true
}
</script>

<style scoped>
.emoji-mixer {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.mixer-result {
  animation: fadeIn 0.5s ease-out;
}

.emoji-pair {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.emoji-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.source-emoji {
  font-size: 3rem;
  margin: 0.5rem 0;
}

.emoji-name {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  max-width: 100px;
  word-break: break-word;
}

.mix-plus, .mix-equals {
  font-size: 2rem;
  color: #666;
  align-self: center;
  margin: 0 0.5rem;
}

.mixed-emoji {
  width: 96px;
  height: 96px;
  margin: 0.5rem 0;
  object-fit: contain;
  background: white;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.mixed-emoji:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.error-message {
  color: #ff4444;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.placeholder {
  padding: 2rem;
  background: #f1f1f1;
  border-radius: 12px;
  color: #666;
  font-size: 1.1rem;
}

h4 {
  margin: 0 0 0.5rem;
  color: #333;
  font-weight: 500;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>