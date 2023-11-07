/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                secondary: '#2E2E2E',
            },
            fontFamily: {
                poppins: ['"Poppins", "sans-serif"'],
            },
        },
    },
    plugins: [],
};
