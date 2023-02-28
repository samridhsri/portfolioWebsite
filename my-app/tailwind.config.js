/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {fontFamily: {
    'mon': '"montserrat"'
  },
    extend: {},
    colors: {
      lightBlack: "#161514",
      white: "white",
      pink: "#FF3860"
    }
  },
  plugins: [],
}
