<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, onMounted } from 'vue'
// Define an interface matching your C# anonymous object
interface ExampleData {
  Message: string
  Timestamp: string
  Success: boolean
  User: any
}

const data = ref<ExampleData | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const fetchData = async () => {
  loading.value = true
  try {
    // Use the relative path to your controller action
    const response = await fetch('/Component/GetExampleJson')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // Parse the JSON result
    const json = await response.json()
    data.value = json
  } catch (e: any) {
    error.value = e.message
    console.error('Failed to fetch data', e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="example-container">
    <h3>Async Data Fetching</h3>

    <div v-if="loading">Loading...</div>

    <div v-else-if="error" class="error">Error: {{ error }}</div>

    <div v-else-if="data" class="result">
      <p><strong>Message:</strong> {{ data.Message }}</p>
      <p><strong>Time:</strong> {{ data.Timestamp }}</p>
      <p><strong>Success:</strong> {{ data.Success }}</p>
      <p><strong>User:</strong> {{ data.User }}</p>
      <button @click="fetchData">Refresh</button>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
.result {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
}
</style>
