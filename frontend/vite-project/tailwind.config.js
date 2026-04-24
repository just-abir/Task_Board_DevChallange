/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        // Title - 40px, 2.5rem, Regular
        title: ["2.5rem", { fontWeight: "400", lineHeight: "1.2" }],
        // Description - 16px, 1rem, Regular
        desc: ["1rem", { fontWeight: "400", lineHeight: "1.5" }],
        // Task title - 20px, 1.25rem, Semibold
        "task-title": ["1.25rem", { fontWeight: "600", lineHeight: "1.3" }],
        // Task button - 16px, 1rem, Semibold
        "task-btn": ["1rem", { fontWeight: "600", lineHeight: "1.5" }],
        // Button text - 14px, 0.875rem, Medium
        "btn-text": ["0.875rem", { fontWeight: "500", lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
