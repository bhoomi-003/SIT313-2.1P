const forms = require("@tailwindcss/forms");

module.exports = {
  content: ["./index.html", "./src//*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        brand: "#0f172a",
        danger: {
          DEFAULT: "#ef4444",
          light: "#f87171",
          dark: "#b91c1c",
        },
      },
      fontFamily: {
        headline: ["Poppins", "sans-serif"],
        body: ["Open Sans", "serif"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        xl: "1rem",
        xxl: "2rem",
      },
      screens: {
        xs: "480px",
        "4xl": "1600px",
      },
    },
  },
  plugins: [forms],
};