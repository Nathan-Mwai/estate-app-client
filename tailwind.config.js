/** @type {import('tailwindcss').Config} */
module.exports = {
  // NB: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM-Regular", "sans-serif"],
        "IBM-bold": ["IBM-Bold", "sans-serif"],
        "IBM-extrabold": ["IBM-BoldItalic", "sans-serif"],
        "IBM-medium": ["IBM-Medium", "sans-serif"],
        "IBM-semibold": ["IBM-SemiBold", "sans-serif"],
        "IBM-light": ["IBM-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
}