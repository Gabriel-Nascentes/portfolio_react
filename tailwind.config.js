/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,css}", "./src/**/**/*.{jsx,css}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
    plugins: [],
  },
};
