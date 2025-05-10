/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#FF1F00',
        'brand-orange': '#FF4D00',
        'brand-warm': '#FF7A00',
        'primary': '#000000',
        'secondary': '#1A1A1A',
        'accent-red': '#FF1F00',
        'accent-orange': '#FF4D00',
        'accent-warm': '#FF7A00',
        'light': '#FFFFFF',
        'success': '#22C55E',
        'error': '#DC2626'
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #FF1F00 0%, #FF4D00 50%, #FF7A00 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      fontSize: {
        'base-mobile': '16px',
      },
      height: {
        screen: ['100vh /* fallback */', '100dvh'],
      },
      minHeight: {
        screen: ['100vh /* fallback */', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh /* fallback */', '100dvh'],
      },
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};