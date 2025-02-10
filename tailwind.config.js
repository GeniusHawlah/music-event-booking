const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-red": "#0B0C1E",
        "header-color": "#F8F8FF",
        "pry-bg": "#0B0C1E",
        "sec-bg": "#1A1B3A",
        "card-bg": "#27284A",
        "the-white": "#F8F8FF",
        "sub-title": "#C0C2E2",
        "tertiary-text": "#8B8EBB",
        "the-pink": "#D726A1 ",
        "hover-blue": "#5D9CEC ",
        "outline-color": "#FFB400",
        "soft-divider": "#3A3D6D ",
        "strong-divider": "#6468B0 ",
      },

      screens: {
        0: "0px",
        400: "400px",
        630: "630px",
        640: "640px",
        685: "685px",
        1025: "1025px",

        // 1025: "1025px",

        600: { raw: "(min-width: 600px)" },
        700: { raw: "(min-width: 700px)" },
        320: { raw: "(min-width: 320px)" },
        350: { raw: "(min-width: 350px)" },
        380: { raw: "(min-width: 380px)" },
        // 400: { raw: "(min-width: 400px)" },
        450: { raw: "(min-width: 450px)" },
        500: { raw: "(min-width: 500px)" },
        560: { raw: "(min-width: 560px)" },
        340: { raw: "(min-width: 340px)" },
        750: { raw: "(min-width: 750px)" },
        800: { raw: "(min-width: 800px)" },
        830: { raw: "(min-width: 830px)" },
        890: { raw: "(min-width: 890px)" },
        900: { raw: "(min-width: 900px)" },
        930: { raw: "(min-width: 930px)" },
        1000: { raw: "(min-width: 1000px)" },
        1130: { raw: "(min-width: 1130px)" },
        1200: { raw: "(min-width: 1200px)" },
      },
    },
  },
  plugins: [],
};
