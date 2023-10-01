/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./App.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    dark: {},
    cyberpunk: {},
  },

  daisyui: {
    themes: ["cyberpunk", "dark",],
  },
  plugins: [require("daisyui")],
}

