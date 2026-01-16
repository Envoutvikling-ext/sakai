<script setup lang="ts">
import { computed } from 'vue'
import InlineSvg from 'vue-inline-svg'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 32,
  },
  color: {
    type: String,
    default: null,
  },
  fill: {
    type: String,
    default: 'currentColor',
  },
})

const src = computed(() => {
  return new URL(`/src/assets/icons/${props.name}.svg`, import.meta.url).href
})
</script>

<template>
  <inline-svg
    style="display: inline-block"
    :src="src"
    :width="size"
    :height="size"
    :fill="fill"
    :color="color"
    :aria-label="name"
  />
</template>
