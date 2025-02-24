/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        meow: ["Meow Script", "serif"], // ✅ Custom font name
      },
    },
    plugins: [require("daisyui")],
  }
}
