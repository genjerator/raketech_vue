<script setup>
import { authStore } from '../stores/authStore.js';
</script>

<template>
    <main>
  <pre v-if="authStore.isAuthenticated">
      <router-link to="/countries">
      <button>Countries</button>
    </router-link>
    </pre>
    </main>
</template>
