const radixColors = require("@radix-ui/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("windy-radix-palette")({
      colors: {
        slate: radixColors.slate,
        slateDark: radixColors.slateDark,
        blue: radixColors.blue,
        blueDark: radixColors.blueDark,
        tomato: radixColors.tomato,
        tomatoDark: radixColors.tomatoDark,
        yellow: radixColors.yellow,
        yellowDark: radixColors.yellowDark,
      },
    }),
  ],
}
