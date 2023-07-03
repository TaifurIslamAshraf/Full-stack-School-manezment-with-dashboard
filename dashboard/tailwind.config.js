/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#007bff", // Blue
          light: "#A5D8DD",
        },
        secondary: {
          DEFAULT: "#6c757d", // Gray
          dark: "#7E909A",
        },
        accent: {
          DEFAULT: "#ffc107", // Yellow
          dark: "#FF9800",
        },
        background: {
          DEFAULT: "#F1F1F1", // Light White
          dark: "#1C4E80", // Dark Blue
        },
      },
    },
  },
  plugins: [],
};
