<template>
  <v-app-bar color="body" dark class="header">
    <v-btn
      @click.stop="ui.toggleRail()"
      :icon="ui.rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
      variant="outlined"
    ></v-btn>
    <v-spacer />
    <v-icon color="white" class="me-2">
      <IconDashbord />
    </v-icon>
    <HeaderProfile />
    <v-btn @click="toggleTheme" icon variant="outlined">
      <component :is="currentTheme === 'light' ? Sun : SunMoon" />
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import "@styles/nav.scss";
import { useTheme } from "vuetify";
import { computed, onMounted } from "vue";
import IconDashbord from "@assets/icons/IconDashbord.vue";
import { navToggle } from "@/stores/navToggle";
import { Sun, SunMoon } from "lucide-vue-next";
import HeaderProfile from "./inner-layout/Header-profile.vue";
const ui = navToggle();

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
