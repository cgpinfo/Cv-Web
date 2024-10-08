/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6366f1',
        'secondary': '#8b5cf6',
        'background': '#0f1115',
        'surface': '#1a1d23',
        'surface-light': '#252a34',
      },
    },
  },
  plugins: [],
}