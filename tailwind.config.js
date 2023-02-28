/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        size: "16px",
      },
      colors: {
        baseApparel: {
          redLight: "hsl(0, 36%, 70%)",
          redDark: "hsl(0, 93%, 68%)",
          redGrayishDark: "hsl(0, 6%, 24%)",
        },
      },

      backgroundImage: {
        "hero-image": "url('/images/hero-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
