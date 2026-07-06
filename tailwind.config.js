/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Navy sampled directly from the official IFEX logo (#030B3A)
        navy: {
          DEFAULT: '#030B3A',
          deep: '#020723',
          soft: '#0B1B5C',
        },
        silver: {
          DEFAULT: '#C9CED8',
          light: '#E7E9EF',
        },
        mist: '#F8F9FC',
        glow: '#D8E4FF',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,20,69,0.04), 0 8px 24px -8px rgba(11,20,69,0.12)',
        card: '0 1px 1px rgba(11,20,69,0.03), 0 12px 32px -12px rgba(11,20,69,0.10)',
        button: '0 1px 2px rgba(11,20,69,0.06), 0 6px 16px -4px rgba(11,20,69,0.10)',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
