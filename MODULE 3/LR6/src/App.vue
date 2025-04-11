<template>
  <div class="app">
    <h1>Миксер эмодзи</h1>

    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="error">Ошибка: {{ error }}</div>

    <div v-else class="emoji-selector">

      <div class="emoji-picker">
        <h2>Выберите первый эмодзи</h2>
        <EmojiList
            :emojis="emojis"
            @selectEmoji="(emoji) => selectEmoji(0, emoji)"
            :selected-emoji="selectedSmiles[0]"
        />
      </div>

      <div class="emoji-picker">
        <h2>Выберите второй эмодзи</h2>
        <EmojiList
            :emojis="emojis"
            @selectEmoji="(emoji) => selectEmoji(1, emoji)"
            :selected-emoji="selectedSmiles[1]"
        />
      </div>
    </div>

    <EmojiMixer
        :firstEmoji="selectedSmiles[0]"
        :secondEmoji="selectedSmiles[1]"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import EmojiList from './components/EmojiList.vue'
import EmojiMixer from './components/EmojiMixer.vue'

export default {
  components: {
    EmojiList,
    EmojiMixer
  },
  setup() {
    const emojis = ref([])
    const isLoading = ref(true)
    const error = ref(null)
    const selectedSmiles = ref([null, null])

    const fetchEmojis = async () => {
      try {
        const response = await fetch('https://emojihub.yurace.pro/api/all')
        if (!response.ok) throw new Error('Ошибка загрузки')
        emojis.value = await response.json()
      } catch (err) {
        error.value = err.message
      } finally {
        isLoading.value = false
      }
    }

    const selectEmoji = (index, emoji) => {
      selectedSmiles.value[index] = emoji
    }

    onMounted(fetchEmojis)

    return {
      emojis,
      isLoading,
      error,
      selectedSmiles,
      selectEmoji
    }
  }
}
</script>

<style scoped>
.emoji-selector {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.emoji-picker {
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 8px;
}
</style>