module.exports = {

  content: ["./**/*.html"],

  theme: {
    extend: {
      colors: {},
    },
  },

  plugins: [require("@tailwindcss/typography"),
  require("daisyui"),
  ],
};
