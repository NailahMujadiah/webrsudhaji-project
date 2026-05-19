/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './resources/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                fadeUp: {
                    from: {
                        opacity: '0',
                        transform: 'translateY(40px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                fadeUp: 'fadeUp 1s ease-out forwards',
            },
        },
    },
    plugins: [],
}
