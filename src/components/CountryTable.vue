<template>
  <div>
    <h2 class="text-3xl font-semibold mb-4 text-center">Country List</h2>
    <div v-if="authStore.isAuthenticated">
      <div v-if="error" class="bg-red-500 text-white p-4">
        {{ error.message }}
      </div>

      <table class="min-w-full border border-gray-200">
      <thead>
      <tr>
        <th class="px-4 py-2 text-left">Flag</th>
        <th class="px-4 py-2 text-left">Country Name</th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="country in countries" :key="country.name">
        <td class="px-4 py-2">
          <img :src="country.flag" :alt="country.name + ' flag'" class="w-24 h-16 shadow-lg">
        </td>
        <td class="px-4 py-2 " >{{ country.name }}</td>
      </tr>
      </tbody>
    </table>
    </div>
    <div v-else>
      Not authorised
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { authStore } from '@/stores/authStore.js'
export default {
  computed: {
    authStore() {
      return authStore
    }
  },
  data() {
    return {
      countries: [],
      error:null
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        if(authStore.isAuthenticated) {
          const { data: { data } } = await axios.get(import.meta.env.VITE_COUNTRY_API);
          this.countries = data;
        }
      } catch (error) {
        this.error = {'message':'Country API is not available'}

      }
    }
  }
};
</script>