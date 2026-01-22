<script setup lang="ts">
import Button from 'primevue/button'
import Popover from 'primevue/popover'

const testEmail = ref()
const toggleEmail = (event: Event) => {
  testEmail.value.toggle(event)
}

const testSms = ref()
const toggleSms = (event: Event) => {
  testSms.value.toggle(event)
}

// Convert string with epoch to date: /Date(1738062338239)/
const convertEpochToDate = (value: string | number | null | undefined) => {
  if (value == null) return ''

  // If it's already a number (epoch ms), use it directly
  if (typeof value === 'number') return new Date(value).toLocaleDateString()

  // Extract the epoch from strings like "/Date(1738062338239)/" (also works for "Date(173...)" etc.)
  const match = value.match(/Date\((\d+)\)/) ?? value.match(/(\d{10,})/)
  if (!match) return ''

  const epochMs = Number(match[1])
  if (!Number.isFinite(epochMs)) return ''

  return new Date(epochMs).toLocaleDateString()
}

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
  <div class="bg-surface-0 rounded-lg dark:bg-surface-950 px-8 md:px-20 py-12 md:py-20 lg:px-80">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2 pb-4">
        <div class="font-semibold text-xl text-surface-900 dark:text-surface-0 leading-tight">
          {{ data?.User.Name }}
        </div>
        <div class="text-surface-500 dark:text-surface-300 text-base leading-tight">
          {{ data?.User.UserName }}
        </div>
      </div>

      <div class="border-t border-surface-200 dark:border-surface-700" />

      <div class="flex flex-col gap-4">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex items-center gap-4 flex-1">
            <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Email</div>
            <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight">
              {{ data?.User.Email }}
            </div>
          </div>
          <div class="flex justify-end">
            <Button
              icon="pi pi-pen-to-square"
              @click="toggleEmail"
              rounded
              outlined
              severity="secondary"
              icon-only
              class="shrink-0"
            />
            <Popover ref="testEmail">
              <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                  <span class="font-medium block mb-2"
                  >Send test email from central service to <strong>{{ data?.User.Email }}</strong></span
                  >
                  <Button label="Send" class="w-full" />
                </div>
              </div>
            </Popover>
          </div>
        </div>

        <div class="border-t border-surface-200 dark:border-surface-700" />

        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex items-center gap-4 flex-1">
            <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Mobile</div>
            <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight">
              {{ data?.User.Mobile }}
            </div>
          </div>
          <div class="flex justify-end">
            <Button
              icon="pi pi-pen-to-square"
              @click="toggleSms"
              rounded
              outlined
              severity="secondary"
              icon-only
              class="shrink-0"
            />
            <Popover ref="testSms">
              <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                  <span class="font-medium block mb-2"
                  >Send test SMS from central service to <strong>{{ data?.User.Mobile }}</strong></span
                  >
                  <Button label="Send" class="w-full" />
                </div>
              </div>
            </Popover>
          </div>
        </div>

        <div class="border-t border-surface-200 dark:border-surface-700" />

        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex items-center gap-4 flex-1">
            <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">
              Alert language
            </div>
            <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight">
              {{ data?.User?.Configuration?.AlertLanguage === 2 ? 'English US' : 'Norsk Bokmål' }}
            </div>
          </div>
        </div>

        <div class="border-t border-surface-200 dark:border-surface-700" />

        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex items-center gap-4 flex-1">
            <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">
              Date of acceptance of terms
            </div>
            <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight">
              {{ convertEpochToDate(data?.User?.Configuration?.Terms) }}
            </div>
          </div>
        </div>

        <div class="border-t border-surface-200 dark:border-surface-700" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
