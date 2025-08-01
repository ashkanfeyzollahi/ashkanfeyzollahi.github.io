/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/{*,**/*}.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "react-blue": "#61dbfb",
                "react-darkblue": "#20232A",
                "react-lightgray": "#282C34",
                "react-mediumgray": "#888888",
                "react-lightgray-border": "#444C56",
                "react-mediumgray-border": "#282C34",
            },
        },
    },
    plugins: [],
};

// 5609200
