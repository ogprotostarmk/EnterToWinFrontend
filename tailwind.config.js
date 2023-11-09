/** @type {import('tailwindcss').Config} */
module.exports = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    
       return config;
     },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
          'ramsBackground': "url('/rams/backgroundImage.jpeg')",
          'saintsBackground': "url('/saints/backgroundImage.jpg')",
          'jaguarsBackground': "url('/jaguars/backgroundImage.jpg')",
      },
      screens: {
        's-agreement': '386px', // Define un media query personalizado
        'pg-size': '1000px', // Define un media query personalizado
      },
    },
  },
  plugins: [],
}
