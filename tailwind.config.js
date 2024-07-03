/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: 'hsl(0, 100%, 74%)',
        green: 'hsl(154, 59%, 51%)',
        blue: 'hsl(248, 32%, 49%)',
        darkBlue: 'hsl(249, 10%, 26%)',
        grayishBlue: 'hsl(246, 25%, 77%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
      fontWeight:{
        'normal': 500,
        'semibold':600,
        'bold': 700,

      },
      screens: {
        'sm': {'max':'320px'},    // Mobile screen size
        'md': {'max':'768px'},    // Tablet screen size (if needed)
        'lg': {'max':'1024px'},   // Desktop screen size
        'xl': {'max':'1440px'},   // Large desktop screen size
      },
    },
  },
  plugins: [],
}
