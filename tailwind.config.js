/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        olivia: ['Olivia','sans-serif'],
        sunshine:['Sunshine','sans-serif'] ,
        Maxwell:['Maxwell', 'sans-serif']

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
        colors:{
          pink:'#F87171',
          blue:'4ec3e4',
          blue1:'#92d9f4',
          blue2:'#1e2e4b',
          opac:'#677e8a',
          pink:'#c8b5ac',
      },
    },
  },
  plugins: [],
}
