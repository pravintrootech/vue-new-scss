<script setup>
import "@styles/home.scss";
</script>

<template>
  <div class="home-main">
    <h1>HelloWorld components</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ipsa.
      Eos nam modi quas vero facere hic magnam unde architecto voluptatem, eaque
      error incidunt nesciunt temporibus beatae, sapiente, fuga perferendis.
    </p>

    <v-text-field
      label="Label"
      variant="outlined"
      class="custom-input mt-4"
    ></v-text-field>
  </div>
</template>

<style scoped>
.custom-input :deep(.v-field__outline__start),
.custom-input :deep(.v-field__outline__end),
.custom-input :deep(.v-field__outline__notch)::before,
.custom-input :deep(.v-field__outline__notch)::after {
  border-color: #42a5f5;
  opacity: 1;
}

.custom-input :deep(.v-field__outline__start) {
  border-radius: 8px 0 0 8px;
}

.custom-input :deep(.v-field__outline__end) {
  border-radius: 0 8px 8px 0;
}

.custom-input :deep(.v-label) {
  color: #42a5f5;
  font-weight: 500;
}

.custom-input :deep(input) {
  font-size: 16px;
}
</style>
