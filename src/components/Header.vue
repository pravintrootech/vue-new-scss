<template>
  <v-app-bar color="primary" dark class="header">
    <v-img class="Logo" :width="50" :height="50" cover :src="Logo"></v-img>
    <v-spacer />
    <v-icon color="white" class="me-2">
      <IconDashbord />
    </v-icon>
    <v-btn @click="toggleTheme" variant="outlined">
      {{ currentTheme }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import "@/scss/nav.scss";
import Logo from "@/assets/logo.svg";
import { useTheme } from "vuetify";
import { computed, onMounted } from "vue";
import IconDashbord from "./icons/IconDashbord.vue";

const theme = useTheme();

// Set from localStorage on load
onMounted(() => {
  const savedTheme = localStorage.getItem("vuetify-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    theme.global.name.value = savedTheme;
  }
});

// Reactive current theme
const currentTheme = computed(() => theme.global.name.value);

// Toggle and store in localStorage
function toggleTheme() {
  theme.global.name.value =
    theme.global.name.value === "light" ? "dark" : "light";
  localStorage.setItem("vuetify-theme", theme.global.name.value);
}
</script>
