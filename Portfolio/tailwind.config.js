/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.index.html',
    "./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      animation: {
        'slide-up': 'slideUp 1s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      colors: {
        background: "#3D3A4B",
        primary: "#F7E3AF",
        secondary: "#08A4BD",
        neutral: "#E3DFFF",
        interaction: "#446DF6",
      },
    },
  },
  plugins: [],
};
