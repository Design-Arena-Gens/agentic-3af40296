import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'crumbl-pink': '#FFC0CB',
        'crumbl-light-pink': '#FFE4E8',
        'crumbl-dark-pink': '#FF8FA3',
      },
      fontFamily: {
        'headline': ['Montserrat', 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
