/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#2E274A',
        whitepaper:"#796E6C",
        whitegradient:"#84736F",
        new:"#141414",
        wax:"#9F9CA2",
        hrcolor:"#151515",
        createbg1:"#1D2036",
        createbg2:"#0F222B",
        createtext1:"#FACA6A",
        createtext2:"#FDND98",
        tagcolor:"#593058",
        road:"#393737",
        roadmap1:"#382441",
        fillerb1:"#8E59BA",
        fillerbg2:"#BF5DC6"
      },
      rotate: {
        '-45': '-45deg',
      },
    },
  },
  plugins: [],
}

