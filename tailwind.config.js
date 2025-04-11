export default {
  theme: {
    fontFamily: {
      sans: ['Azeret Mono', 'monospace'],
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: 'blue',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        spin: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        }
      },
    },
  },
  plugins: [],
};