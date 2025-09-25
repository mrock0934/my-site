// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],      // body & nav
      serif: ['"EB Garamond"', "serif"],   // headings
      mono: ['"Fira Mono"', "monospace"],  // meta/captions if you want
    },
    extend: {},
  },
  plugins: [],
};
