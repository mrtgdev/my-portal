
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,svelte,html}",
      './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    backgroundImage: {
      stripeLeft: "url('./src/assets/stripes/stripe-left.svg')",
      laptop: "url('https://images.unsplash.com/photo-1515504846179-94ac6b34ebb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80')",
      me: "url('./src/assets/IMG_3681.JPG')",
      cooffe: "url('https://images.unsplash.com/photo-1595683363301-1e94594a550d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80')"
    },
    fontFamily: {
      grotesk: ['Space Grotesk', 'monospace'],
      titleGrotesk: ['Grotesk', 'sans-serif']
    },
    letterSpacing: {
      zero: "-0.07em"
    },
    extend: {
      colors: {
        'bigstone': "#151515",
        'fluro-papaya': "#fe5000",
        'neon-blue': "#47f7fc",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  darkMode: 'class',
}
