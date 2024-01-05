import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '576px',

      md: '760px',

      lg: '960px',

      xl: '1000px',
    },

    extend: {
      translate: {
        '[-81.25rem]': '-81.25rem',
      },
    },
  },
  plugins: [],
};
export default config;
