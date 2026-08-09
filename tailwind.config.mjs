/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f97216',
          dark: '#e05f0a',
          light: '#fff4ed',
        },
        ink: {
          DEFAULT: '#384053',
          muted: '#5a6578',
          light: '#6b7280',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f4f5f7',
          dark: '#2c3340',
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
      },
      maxWidth: {
        container: '72rem',
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(249, 114, 22, 0.35)',
      },
    },
  },
  plugins: [],
};
