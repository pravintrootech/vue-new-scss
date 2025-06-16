import { defineStore } from "pinia";
export const navToggle = defineStore("ui", {
  state: () => ({
    rail: false,
  }),
  actions: {
    toggleRail() {
      this.rail = !this.rail;
    },
  },
});
