import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D2D5DA',
        secondary: '#6C727F',
        'dark': '#1B1D1F',
        'light-black': '#282B30',
        'light-blue': '#4E80EE',
      },
    },
  },
  plugins: [],
}
export default config
