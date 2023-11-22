/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'green-uruzin': '#009D5A',
      'light-green-uruzin': '#83D187',
      'gray-uruzin': '#5D737E',
      'light-gray-uruzin': '#D9D9D9',
      'dark-blue-uruzin': '#0F2137',
      'black-uruzin': '#12130F',
      'black-pure': '#000000',
      'white-pure': '#FFFFFF',
      'purple-uruzin': '#02073E',
      'blue-uruzin': '#4F96FF',
      'primary-content-uruzin': '#1D2130',
      'secondary-content-uruzin': '#525560',      
      'light-dark-uruzin': '#343D48',      
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
      dm: ['DM Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        // 'vector': "url('./src/assets/images/Vector.png')",
      },
      animation: {
        bounceright: "bounceright 1s infinite",
        // greenright: "greenright 1s infinite",
        // greenright: "greenright 1s linear infinite",
        // greenright: "greenright 3s ease infinite",
      },
      keyframes: {
        bounceright: {
          "0%, 100%": {
            transform: "translateX(35%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        // greenright: {
        //   // "0%, 100%": {
        //   //   'background-image': 'linear-gradient(to right bottom, #02a861, #019255, #017c48, #02663c, #035230)'
        //   // },
        //   // "50%": {
        //   //   'background-image': 'linear-gradient(to right bottom, #035230, #02663c, #017c48, #019255, #02a861)'
        //   // },
        //   //? ///////////////////////////////////////////////////////////////
        //   // "0%": {
        //   //   'background-position': '0% 0%'
        //   // },
        //   // "50%": {
        //   //   'background-position': '93% 100%'
        //   // },
        //   // "100%": {
        //   //   'background-position': '0% 0%'
        //   // },
        //   //? ///////////////////////////////////////////////////////////////
        //   // "0%": {
        //   //   backgroundPosition: "100% 50%", // Start from right
        //   // },
        //   // "100%": {
        //   //   backgroundPosition: "0 50%", // End at right
        //   // },
        // },
      },
    },
  },
  plugins: [],
};
