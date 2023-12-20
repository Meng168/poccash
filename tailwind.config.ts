import type { Config } from 'tailwindcss'

const config: Config = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "color-primary": "#6DB33F",
        "color-secondary": "#324C5B",
        "color-gray": "#93A1AA",
        "color-danger": "#EE1D52",
        "color-dark": "#7B93A4"
      },
      fontSize: {
        'font-12': '12px',
        'font-13': '13px',
        'font-14': '14px',
        'font-15': '15px',
        'font-16': '16x',
        'font-17': '17px',
        'font-18': '18px',
        'font-19': '19px',
        'font-20': '20px',
        'font-21': '21px',
        'font-22': '22px',
        'font-23': '23px',
        'font-24': '24px',
        'font-25': '25px',
        'font-26': '26px',
        'font-27': '27px',
        'font-28': '28px',
        'font-29': '29px',
        'font-30': '30px'
      },
      fontFamily: {
        'avenir': ['var(--font-avenir)'],
        'cerebri': ['var(--font-cerebri)'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar'),
  ],
}
export default config
