import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getCountries } from "@/api/api";

export const useCountryStore = defineStore('country', () => {
    const countries = ref([])

    async function processData() {
        countries.value = await getCountries()
    }

    return {
        countries,
        processData
    }
})