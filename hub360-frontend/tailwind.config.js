/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Hub 360 Group brand tokens (pulled from the office signage)
        navy: {
          DEEP: "#141B33",   // primary background / hero
          DEFAULT: "#1F2A52", // primary brand navy
          mid: "#2C3968",    // card / panel navy
          light: "#3E4C86",  // hover states
        },
        accent: {
          DEFAULT: "#2E5AAC", // restrained corporate blue, primary CTA / link color
          light: "#4C74C4",
          dim: "#8FA8D6", // for subtle borders / rings on dark backgrounds
        },
        grow: {
          DEFAULT: "#2F8F5B", // "growth arrow" green from the sign, muted
          light: "#4CA976",
        },
        ivory: "#F5F6F8",
        ink: "#20283A",
        slate: {
          line: "#D7DCE5", // hairline borders
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 24px -12px rgba(16, 24, 45, 0.18)",
      },
      backgroundImage: {
        "orbit-arc":
          "radial-gradient(circle at 50% 50%, transparent 55%, rgba(46,90,172,0.10) 56%, transparent 58%)",
      },
    },
  },
  plugins: [],
};
