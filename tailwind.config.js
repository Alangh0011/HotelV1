/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide': 'slide 20s linear infinite',
      },
      transitionProperty: {
        'width': 'width',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
    variants: {},
  },
  plugins: [],
}

