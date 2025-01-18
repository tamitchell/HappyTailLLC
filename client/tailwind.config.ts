import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        montserrat: ['var(--font-montserrat)'],
        raleway: ['var(--font-raleway)'],
      },
      colors: {
        primary: 'var(--primary-color)',
        'primary-hover': 'var(--primary-hover)',
        blueGrey: '#B8BAC3',
        beige: 'rgba(227, 215, 206, 0.5)',
        rootBrown: 'rgba(52, 28, 23, 0.3)',
        darkBrown: '#1B110C',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
