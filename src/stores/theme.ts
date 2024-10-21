import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'natural'
  }),
  actions: {
    setTheme(theme: string) {
      this.currentTheme = theme;
    }
  }
});