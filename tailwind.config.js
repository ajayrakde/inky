/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4E6A',
        'primary-2': '#FF7E7E',
        secondary: '#00D2A0',
        'secondary-2': '#36E5C0',
        accent1: '#6A5BFF',
        'accent1-2': '#A178FF',
        accent2: '#FFB347',
        background: '#FDFCFB',
        'background-alt': '#F6F7FB',
        text: '#1F1F1F',
        'text-muted': '#666666',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'data': ['Space Grotesk', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(45deg, #FF4E6A, #FF7E7E)',
        'grad-secondary': 'linear-gradient(45deg, #00D2A0, #36E5C0)',
        'grad-accent': 'linear-gradient(45deg, #6A5BFF, #A178FF)',
      },
      borderRadius: {
        'card': '12px',
        'lg-card': '16px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
