<template>
  <div class="min-h-screen flex justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-2xl p-8 text-center w-100">
      
      <h1 class="text-4xl font-semibold mb-4">
        Vitest Demo
      </h1>
      <div>
        <button 
        @click="displayCountries()"
        class="group relative inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition-all hover:bg-sky-400 active:scale-95 shadow-lg shadow-sky-500/20">
          <span>Get Countries</span>
          <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <!-- <button class="group relative inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition-all hover:bg-sky-400 active:scale-95 shadow-lg shadow-sky-500/20">
          <span>Countries</span>
          <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <button class="group relative inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition-all hover:bg-sky-400 active:scale-95 shadow-lg shadow-sky-500/20">
          <span>Countries</span>
          <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button> -->
      </div>
      <p v-if="activeLink.country" class="autoscroll">
        {{ getCountries }}
      </p>

    </div>
  </div>
</template>
<script setup>
import { useCountryStore } from '@/store/api'
import { ref, computed } from 'vue';
import { onMounted } from 'vue';

const countryStore = useCountryStore()

const activeLink = ref({
  country: false
})

const getCountries = computed(() => countryStore.countries)

const displayCountries = () => {activeLink.value.country === true ? activeLink.value.country = false : activeLink.value.country = true}

onMounted(async () => {
  await countryStore.processData()
})

</script>

<style scoped>
.autoscroll {
  max-height: 500px;
  min-height: 700px;
  overflow-y: scroll;
}
</style>