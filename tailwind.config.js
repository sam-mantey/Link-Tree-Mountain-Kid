/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgba(0, 0, 0, 0.4)",
        light: 'rgba(0, 0, 0, 0) 0px 30px 60px -10px'
      }
    },
  },
  plugins: [],
}
