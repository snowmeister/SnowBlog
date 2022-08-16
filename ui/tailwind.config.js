const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    {
      pattern: /bg-(black|white|gray|slate|emerald|indigo|yellow|zinc|neutral|stone|red|orange|amber|lime|green|teal|cyan|sky|blue|violet|purple|fuchsia|pink)-(900)/,
    },
    {
      pattern: /text-(black|white|gray|slate|emerald|indigo|yellow|zinc|neutral|stone|red|orange|amber|lime|green|teal|cyan|sky|blue|violet|purple|fuchsia|pink)-(100|900)/,
    },
    {
      pattern: /border-(black|white|gray|slate|emerald|indigo|yellow|zinc|neutral|stone|red|orange|amber|lime|green|teal|cyan|sky|blue|violet|purple|fuchsia|pink)-(100)/,
    },
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      green: colors.green,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
    },
  },
  plugins: [],
};