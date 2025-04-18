/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { play: ["Play", "sans-serif"] },
      colors: {
        // Background
        base: "#fbfcf8",
        section: "#5C628A",

        // Text
        newsText: "#35485D",

        // Border
        newsButton: "#576F8B",
        newsBorder: "#576F8B",
      },
    },
  },
  plugins: [],
};
