import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import SettingsIndex from "../pages/Settings/Index.vue";
import SettingsProfile from "../pages/Settings/Profile.vue";
import SettingsPreferences from "../pages/Settings/Preferences.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsIndex,
  },
  {
    path: "/settings/profile",
    name: "SettingsProfile",
    component: SettingsProfile,
  },
  {
    path: "/settings/preferences",
    name: "SettingsPreferences",
    component: SettingsPreferences,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
