/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a2463',
          800: '#0d2d6b',
          700: '#1a3a7a',
          600: '#254d8a',
        },
        blue: {
          800: '#0a9e8f',
          700: '#0ca698',
          600: '#0fb8a9',
          500: '#00d4ff',
          100: '#e6f7f5',
        },
        yellow: {
          400: '#0fb8a9',
          500: '#00d4ff',
        },
        teal: {
          400: '#0fb8a9',
          500: '#00d4ff',
        },
        green: {
          800: '#2e6b00',
          700: '#3d8f00',
          600: '#5cb800',
          500: '#7cfc00',
          400: '#96ff33',
          300: '#b0ff66',
          100: '#eaffcc',
          50: '#f5ffeb',
        },
        accent: {
          green: '#7cfc00',
          coral: '#ff6b6b',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
