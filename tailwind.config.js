/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './.storybook/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    variants: {
      extend: {
        opacity: ['data-open', 'data-closed', 'data-enter', 'data-leave'],
        translate: ['data-closed'],
        scale: ['data-closed'],
      },
    },
    plugins: [],
  }
  