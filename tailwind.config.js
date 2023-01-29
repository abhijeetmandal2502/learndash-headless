/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        bordergray: '#949494',
        voilet: '#9747FF',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#949494',
      }

    },
  },
  plugins: [],
}