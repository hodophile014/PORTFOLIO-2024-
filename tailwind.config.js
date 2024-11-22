/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: '#FFD700',
          400: '#FFEA70',
        },
      },
    },
  },
  plugins: [],
}

