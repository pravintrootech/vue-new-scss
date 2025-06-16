<template>
  <v-navigation-drawer
    class="side-nav"
    v-model="drawer"
    expand-on-hover
    :rail="ui.rail"
    permanent
    color="background"
  >
    <!-- @click="ui.rail = false" -->
    <v-list class="side-head">
      <v-img class="Logo" :width="20" :height="20" cover :src="Logo"></v-img>
    </v-list>

    <v-list class="side-body" density="compact" nav>
      <v-list-item
        v-for="item in mainItems"
        :key="item.value"
        :title="item.title"
        :to="item.path"
        :prepend-icon="item.icon"
        :value="item.value"
      />

      <v-list-group v-for="(menu, index) in settingsItems" :key="index">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            :title="menu.title"
            :prepend-icon="menu.icon"
          />
        </template>

        <v-list-item
          v-for="item in menu.items"
          :key="item.value"
          :title="item.title"
          :to="item.path"
          :prepend-icon="item.icon"
          :value="item.value"
        />
      </v-list-group>

      <v-list-item :prepend-icon="BadgeHelp" title="Help" value="help" />
      <v-list-item :prepend-icon="LucideLogOut" title="Logout" value="logout" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import "@styles/sidebar.scss";
import { ref } from "vue";
import { navToggle } from "@/stores/navToggle";
import Logo from "@assets/logo.svg";
import {
  BadgeHelp,
  CircleUser,
  Clock,
  CreditCard,
  Folder,
  LayoutDashboard,
  LucideLogOut,
  Settings,
  Settings2,
  ShieldCheck,
  Star,
  Trash,
  Trash2,
  UserRound,
  UsersRound,
} from "lucide-vue-next";
const ui = navToggle();
const drawer = ref(true);

const mainItems = [
  {
    title: "Dashtop",
    icon: LayoutDashboard,
    path: "/",
    value: "dashtop",
  },
  {
    title: "My Files",
    icon: Folder,
    path: "",
    value: "myfiles",
  },
  {
    title: "Shared with me",
    icon: UsersRound,
    path: "",
    value: "shared",
  },
  { title: "Starred", icon: Star, path: "", value: "starred" },
  {
    title: "Recent",
    icon: Clock,
    path: "",
    value: "recent",
  },
  {
    title: "Trash",
    icon: Trash2,
    path: "",
    value: "trash",
  },
];

const settingsItems = [
  {
    title: "Settings",
    icon: Settings,
    items: [
      {
        title: "Profile",
        icon: CircleUser,
        value: "profile",
        path: "/settings/profile",
      },
      {
        title: "Preferences",
        icon: Settings2,
        value: "preferences",
        path: "/settings/preferences",
      },
    ],
  },
  {
    title: "Account",
    icon: UserRound,
    items: [
      {
        title: "Billing",
        icon: CreditCard,
        path: "",
        value: "billing",
      },
      {
        title: "Security",
        icon: ShieldCheck,
        path: "",
        value: "security",
      },
    ],
  },
];
</script>
