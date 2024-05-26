/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom-1': '60vw',  // Custom maxWidth of 32rem
        

      },
      screens : {
        'xsm' : '340px',
        'msm' : '804px'
      }
    },
  },
  plugins: [],
}

