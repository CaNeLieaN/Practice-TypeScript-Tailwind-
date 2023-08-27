module.exports = {
  mode: "jit", // enable JIT
  purge: ["./**/*.html"], // specify files in which to look for classes
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      Prompt: ["Prompt"],
      Poppins: ["Poppins"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  variants: {},
  plugins: [],
};
