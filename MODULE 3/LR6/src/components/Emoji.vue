<template>
  <span v-html="htmlCode"></span>
</template>

<script setup>
const props = defineProps({
  emoji: {
    type: Object,
    required: true
  }
})

const htmlCode = props.emoji.htmlCode[0]
</script>