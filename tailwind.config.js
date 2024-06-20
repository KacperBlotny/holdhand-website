/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#00249A',
        mainHover: '#9AA4E6',
        colorBg: '#f0f3f8',
        gradientStart: '#7A8AF4',
        gradientEnd: '#163394',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #7A8AF4, #163394)',
        'footer-gradient': 'linear-gradient(to bottom, #7A8AF4, #163394)',
      },
    },
  },
  plugins: [],
}
