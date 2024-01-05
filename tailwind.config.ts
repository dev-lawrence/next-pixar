import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      lg: '1000px',
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
