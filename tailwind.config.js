/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-gradient': {
          100: '#6ed3cf',
          200: '#4dc3d77'
        },
      },
      backgroundImage: {
        'custom-gradient': ' radial-gradient( circle 975px at 2.6% 48.3%,  rgba(0,8,120,1) 0%, rgba(95,184,224,1) 99.7% ) '
      },

    },
  },
  plugins: [],
}

