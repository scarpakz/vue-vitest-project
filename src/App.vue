<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-2xl p-8 text-center w-100">
      
      <h1 class="text-4xl font-semibold mb-4">
        Vitest
      </h1>
      <div class="max-w-full">
        <label for="Headline" class="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 ml-1">
          Country Selection
        </label>
          <div class="relative my-2">
            <select 
              v-model="selectedCountry"
              @change="handleChange"
              name="Headline" 
              id="Headline" 
              class="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-slate-700 shadow-sm outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 cursor-pointer"
            >
              <option value="">Choose</option>
              <option :value="item" v-for="item in sortCountries" :key="item">{{ item }}</option>
            </select>
            
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      <Country :data="getCountry"/>
    </div>
  </div>
</template>
<script setup>
import { useCountryStore } from '@/store/api'
import { ref, computed } from 'vue'
import { onMounted } from 'vue'
import Country from '@/components/Country.vue'

const countryStore = useCountryStore()
const selectedCountry = ref('')
const data = ref()

const sortCountries = computed(() => {
  return countryStore.countries.map(item => item.name.common).sort((a,b) => a.localeCompare(b))
})

const handleChange = () => {
  data.value = countryStore.countries.filter(item => item.name.common === selectedCountry.value)
}
const getCountry = computed(() => data.value)

onMounted(async () => {
  await countryStore.processData()
})

</script>

<style scoped>

</style>