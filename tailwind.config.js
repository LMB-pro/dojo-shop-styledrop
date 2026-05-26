/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondaryBrown: "#8A8475",
        exaltNavy: "#0A0F5C",
        exaltPink: "#F0047F",
        exaltYellow: "#FFD600",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
