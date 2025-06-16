<template>
  <v-app class="main-model">
    <SideBar />
    <v-main>
      <Header />
      <div class="main-content-box">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import Header from "@components/layout/Header.vue";
import SideBar from "@components/layout/SideBar.vue";
</script>

<style lang="scss" scoped></style>
