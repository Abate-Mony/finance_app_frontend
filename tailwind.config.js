/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                "poppins": ['Poppins', 'sans-serif'],
                "manrope": ['Manrope', 'sans-serif'],
                "montserrat": ['Montserrat', 'sans-serif'],

            },
            backgroundColor: {
                color_dark: "#2e2e2e",
                color_light: "#f8f8f8",
                color_black: "#141414",
                color_white: "#fff",

            }
        },

    },
    darkMode: "class",

    plugins: [],
}