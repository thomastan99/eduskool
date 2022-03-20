<template>
  <button>Logout</button>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Logout",

  components: [],

  setup() {
    const store = useStore();

    const logout = () => {
      store.dispatch("logout");
    };

    return {
      logout,
    };
  },
};
</script>

<style>
</style>