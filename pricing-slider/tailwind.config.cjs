/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "soft-cyan": "hsl(174, 77%, 80%)",
      "strong-cyan": "hsl(174, 86%, 45%)",
      "light-grayish-red": "hsl(14, 92%, 95%)",
      "light-red": "hsl(15, 100%, 70%)",
      "pale-blue": "hsl(226, 100%, 87%)",
      // secondary
      white: "#FFF",
      "very-pale-blue": "hsl(230, 100%, 99%)",
      "light-grayish-blue": "hsl(224, 65%, 95%)",
      "toggle-background": "hsl(223, 50%, 87%)",
      "grayish-blue": "hsl(225, 20%, 60%)",
      "dark-desaturated-blue": "hsl(227, 35%, 25%)",
    },
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
