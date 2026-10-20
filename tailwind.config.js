/** @type {import('tailwindcss').Config} */
// Tokens: ver DESIGN.md (v2 — brand book oficial + protótipo)
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Oficiais — brand book
        lavender: {
          DEFAULT: '#C2B2D1',
          soft: '#F3EEF4',
        },
        chalk: '#F2F0EF',
        smoky: '#8E6998',
        lime: {
          DEFAULT: '#CFDFB3',
          soft: '#EDEFE1',
        },
        // Derivados — acessibilidade e protótipo
        plum: {
          DEFAULT: '#4C2650',
          hover: '#3B1C3F',
          deep: '#2D1B31',
        },
        paper: '#FAF9F5',
        moss: '#536B3A',
        ink: {
          DEFAULT: '#2D1B31',
          muted: '#6B5E70',
        },
      },
      fontFamily: {
        display: ['Courgette', 'cursive'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 2rem + 3.2vw, 4.5rem)', { lineHeight: '1.1' }],
        section: ['clamp(2rem, 1.6rem + 1.8vw, 3rem)', { lineHeight: '1.15' }],
        tagline: ['clamp(1.5rem, 1.3rem + 0.8vw, 2rem)', { lineHeight: '1.3' }],
      },
      maxWidth: {
        content: '1240px',
      },
      spacing: {
        section: 'clamp(3.5rem, 7vw, 6rem)',
      },
      boxShadow: {
        soft: '0 8px 24px -8px rgba(76, 38, 80, 0.10)',
        lift: '0 16px 36px -12px rgba(76, 38, 80, 0.18)',
      },
    },
  },
  plugins: [],
}
