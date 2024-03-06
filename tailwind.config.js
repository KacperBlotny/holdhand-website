/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#e9f1f8",
        lightHover: "#ddeaf4",
        lightActive: "#b9d3e8",
        normal: "#1e72b6",
        normalHover: "#1b67a4",
        normalActive: "#185b92",
        dark: "#175689",
        darkHover: "#12446b",
        darkActive: "#0d3352",
        darker: "#0b2840",
        darker: "#0b2840",
        lightPhoto: "#8AC6ff",
        darkPhoto: "#004585",
        grayDark: "#3e4756",
        grayLight: "#a2acbd",
      },
      height: {
        "90vh": "90vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "30vh",
      },
    },
  },
  plugins: [],
};
