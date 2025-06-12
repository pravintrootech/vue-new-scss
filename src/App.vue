<template>
  <v-app class="main-model">
    <SideBar />
    <v-main>
      <Header />
      <div class="main-content-box">
        <HelloWorld />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
</script>

<style lang="scss" scoped></style>
