/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_blue: "#0a1930",
        light_blue: "#1f93ff",
        color_white: "#fff",
        color_dark: "#333",
        color_grey: " #eee",
        color_purple: "#9d0191",
        color_orange: "#ff7722",
        color_primary: "#007bff",
        color_success: "#28a745",
        color_danger: "orangered",
        box_shadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      },
      // backgroundImage: {
      //   "header-img": "url('/assets/header_img.png')",
      // },
    },
  },
  plugins: [],
};
