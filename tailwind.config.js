/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'san-serif': ['Calibre', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

