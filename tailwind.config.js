module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: {
        "custom": "scale-103"
      },
      fontFamily: {
        "myfont": "Noto Sans, sans-serif"
      }
    },
  },
  plugins: [],
}