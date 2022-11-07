/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "black": "#161515",
        "grey": "#40454E",
        "lightgrey": "#E8E9EF",
        "blue": "#4D8BBE",
        "darkblue": "#27699E"
      },
      backgroundImage: {
        'aboutpromo': "url('./assets/About/about_bg.png')",
      },
      screens: {
        'lg': {'min': '1024px', 'max': '1279px'},
        'md': {'min': '768px', 'max': '1023px'},
        'sm': {'min': '480px', 'max': '767px'},
        'xs': {'min': '320px', 'max': '479px'},
      }
    },
  },
  plugins: [],
}
