import { reactive } from 'vue';

export const authStore = reactive({
  user: null,
  isAuthenticated: false,
});
