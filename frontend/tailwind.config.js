// This file should only contain the Tailwind CSS configuration

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Scans all .html and .js files in the src directory and its subdirectories
    './*.html', // Scans any .html files in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

