<template>
  <div class="emoji-grid">
    <div
        v-for="emoji in emojis"
        :key="emoji.name"
        class="emoji-item"
        :class="{ 'selected': isSelected(emoji) }"
        @click="emitSelectEmoji(emoji)"
        v-html="emoji.htmlCode[0]"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  emojis: {
    type: Array,
    required: true
  },
  selectedEmoji: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['selectEmoji'])

const emitSelectEmoji = (emoji) => {
  emit('selectEmoji', emoji)
}

const isSelected = (emoji) => {
  return props.selectedEmoji && props.selectedEmoji.name === emoji.name
}
</script>

<style scoped>
.emoji-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 1rem;
  max-height: 500px;
  overflow-y: auto;
}

.emoji-item {
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s;
  text-align: center;
  padding: 0.5rem;
}

.emoji-item:hover {
  transform: scale(1.2);
}

.emoji-item.selected {
  background-color: #d4edff;
  border-radius: 8px;
  transform: scale(1.3);
}
</style>