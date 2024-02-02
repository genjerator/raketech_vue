<script>
import { useAuth0 } from '@auth0/auth0-vue';
import { authStore } from './stores/authStore.js';
import { watchEffect } from 'vue'
import CountriesView from '@/views/CountriesView.vue'

export default {
  computed: {
    CountriesView() {
      return CountriesView
    }
  },
  setup() {
    const { loginWithRedirect, user, isAuthenticated,logout } = useAuth0();
    watchEffect(() => {
      authStore.user = user;
      authStore.isAuthenticated = isAuthenticated || false;
    });
    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      },
      user,
      isAuthenticated
    };
  }
};
</script>

<template>
  <div>
    <pre v-if="isAuthenticated">
      <h2>Welcome {{ user.name }}</h2>
      <button @click="logout">Log out</button>
    </pre>
    <pre v-else>
      <button @click="login">Log in</button>
    </pre>
  </div>


  <RouterView />
</template>

