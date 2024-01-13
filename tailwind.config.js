const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-c': '#1B37A3',
        'black': '#191919',
        'white': '#FFFFFF',
        'gray-bg': '#1B37A31A',
        'detail-bg': '#F7F7FC',
        'btn-gray': '#B0B0B0'
      }
    },
  },
  plugins: [],
});
