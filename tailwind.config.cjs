/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    fontFamily: {
      grotesk: ['Space Grotesk', 'monospace']
    },
    extend: {
      colors: {
        'bigstone': "#171717",
        'fluro-papaya': "#fe5000",
        'neon-blue': "#47f7fc",
      }
    },
  },
  plugins: [],
}
