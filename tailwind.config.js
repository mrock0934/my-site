import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
      serif: ['"EB Garamond"', "serif"],
      mono: ['"Fira Mono"', "monospace"],
    },
    extend: {},
  },
  plugins: [typography],
};