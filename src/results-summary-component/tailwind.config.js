/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "#FF5757", // Primary
        "orangey-yellow": "#FFB01F", // Primary
        "green-teal": "#00BD91", // Primary
        "cobalt-blue": "#1125D4", // Primary

        "pale-blue": "#EBF1FF", // Neutral
        "light-lavender": "#C8C7FF", // Neutral
        "dark-gray-blue": "#303B5A", // Neutral

        "light-slate-blue": "#7857FF", // Gradient
        "light-royal-blue": "#2E2BE9", // Gradient
        "violet-blue": "#4E21CA", // Gradient
        "persian-blue": "#2421CA", // Gradient
      },
      fontFamily: {
        sans: ["HankenGrotesk", "sans-serif"],
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
  ],
};
