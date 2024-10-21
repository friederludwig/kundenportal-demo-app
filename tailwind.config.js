// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#6246EA", // primary
                    50: "#F0EDFC", // primary-50 (heller)
                    100: "#D9D5FA", // primary-100
                    200: "#B3ACF4", // primary-200
                    300: "#8D84EE", // primary-300
                    400: "#675BE8", // primary-400
                    500: "#6246EA", // primary-500
                    600: "#4E37BB", // primary-600 (dunkler)
                    700: "#3A288C", // primary-700
                    800: "#271A5E", // primary-800
                    900: "#140D2F", // primary-900
                },
                secondary: "#",
                white: "#FFFFFE",
                black: "#2B2C34",
                "gray-light": "#F7F7F6"
            },
            gridTemplateColumns: {
                24: 'repeat(24, minmax(0, 1fr))',
            }
        },
    },
    safeList: [
        "col-span-1",
        "col-span-2",
        "col-span-3",
        "col-span-4",
        "col-span-5",
        "col-span-6",
        "col-span-7",
        "col-span-8",
        "col-span-9",
        "col-span-10",
    ],
    plugins: [],
};
