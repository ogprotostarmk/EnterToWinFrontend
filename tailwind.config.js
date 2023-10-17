/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
  },
  plugins: [],
}
