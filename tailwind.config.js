/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  externals : {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  }
};
