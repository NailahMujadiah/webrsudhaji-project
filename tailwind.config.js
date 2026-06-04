/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
        './index.html',
        './resources/**/*.{blade.php,tsx,jsx,ts,js}',
    ],

    safelist: [
        'bg-green-500',
        'text-white',
        'group',
    'group-hover:visible',
    'group-hover:opacity-100',
    'group-hover:translate-y-0',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            fontWeight: {
                regular: '400',
                medium:  '500',
                bold:    '700',
            },
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
};