module.exports = {
  mode: "JIT",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or false or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};