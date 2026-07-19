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
          800: '#336600',
          700: '#4D9900',
          600: '#66CC00',
          500: '#7FFF00',
          400: '#8CFF33',
          300: '#A0FF66',
          100: '#E5FFD0',
          50: '#F2FFE8',
        },
        accent: {
          green: '#7FFF00',
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
