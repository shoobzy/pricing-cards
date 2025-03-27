/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        "bg-blue-100",
        "text-blue-100",
        "text-blue-600",
        "bg-blue-600",
        "hover:bg-blue-700",
        "focus:ring-blue-600",
        "bg-purple-100",
        "text-purple-100",
        "text-purple-600",
        "bg-purple-600",
        "hover:bg-purple-700",
        "focus:ring-purple-600",
        "bg-indigo-100",
        "text-indigo-100",
        "text-indigo-600",
        "bg-indigo-600",
        "hover:bg-indigo-700",
        "focus:ring-indigo-600",
    ],
};
